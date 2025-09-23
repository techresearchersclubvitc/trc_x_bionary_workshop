import styles from "../styles/PuzzleGame.module.css";

export default function PuzzleRow({ path, pieces, selected, onSelect, feedback }) {
  return (
    <div className={styles.puzzleRow}>
      <span className={styles.pathLabel}>{path}</span>
      <select value={selected || ""} onChange={(e) => onSelect(path, e.target.value)}>
        <option value="">Select Page</option>
        {pieces.map((piece) => (
          <option key={piece} value={piece}>
            {piece}
          </option>
        ))}
      </select>
      {feedback === true && <span className={styles.correct}>✅</span>}
      {feedback === false && <span className={styles.wrong}>❌</span>}
    </div>
  );
}
