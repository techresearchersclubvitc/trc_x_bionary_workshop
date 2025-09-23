import styles from "../styles/PuzzleGame.module.css";

export default function PuzzlePiece({ label }) {
  return <div className={styles.puzzlePiece}>🧩 {label}</div>;
}
