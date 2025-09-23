import { useState } from "react";
import PuzzleRow from "./PuzzleRow";
import PuzzlePiece from "./PuzzlePiece";
import styles from "../styles/PuzzleGame.module.css";

export default function PuzzleGame() {
  const routes = {
    "/home": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/product/42": "Product Page",
  };

  const paths = Object.keys(routes);
  const pieces = Object.values(routes);

  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleSelect = (path, piece) => {
    setAnswers((prev) => ({ ...prev, [path]: piece }));
  };

  const checkAnswers = () => {
    const newFeedback = {};
    paths.forEach((path) => {
      newFeedback[path] = answers[path] === routes[path];
    });
    setFeedback(newFeedback);
  };

  const allCorrect = paths.every((p) => feedback[p]);

  return (
    <div className={styles.puzzleGame}>
      <h1>Routing Puzzle Challenge</h1>
      <p>Match each path to the correct page!</p>

      {paths.map((path) => (
        <PuzzleRow
          key={path}
          path={path}
          pieces={pieces}
          selected={answers[path]}
          onSelect={handleSelect}
          feedback={feedback[path]}
        />
      ))}

      <button className={styles.checkBtn} onClick={checkAnswers}>
        Check Answers
      </button>

      {allCorrect && (
        <p className={styles.successMsg}>
          🎉 All correct! You solved the puzzle!
        </p>
      )}

      <h2>Page Previews</h2>
      <div className={styles.previews}>
        {pieces.map((piece) => (
          <PuzzlePiece key={piece} label={piece} />
        ))}
      </div>
    </div>
  );
}
