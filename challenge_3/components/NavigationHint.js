import styles from '../styles/CTF.module.css';

export default function NavigationHint({ hint, nextRoute }) {
  return (
    <div className={styles.hintBox}>
      <h3>🔍 Navigation Hint:</h3>
      <p className={styles.hint}>{hint}</p>
      <div className={styles.routeClue}>
        <span>Think about the URL structure: <code>/your-answer-here</code></span>
      </div>
    </div>
  );
}
