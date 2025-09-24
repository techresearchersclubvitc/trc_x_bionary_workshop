import styles from '../styles/CTF.module.css';

export default function WordExtractor({ word, position }) {
  return (
    <div className={styles.wordExtraction}>
      <div className={styles.extractedWord}>
        <span className={styles.wordLabel}>Word #{position}:</span>
        <span className={styles.word}>{word}</span>
      </div>
      <p className={styles.instruction}>
        💡 Remember this word - you'll need it to form the final message!
      </p>
    </div>
  );
}
