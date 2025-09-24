import Layout from '../components/Layout';
import WordExtractor from '../components/WordExtractor';
import styles from '../styles/CTF.module.css';

export default function Vault() {
  return (
    <Layout title="Vault - CTF Challenge">
      <div>
        <h2>🔒 The Secure Chamber</h2>
        <p><strong>Inside</strong> this fortified chamber, the greatest secrets of the ages are protected by layers of security and ancient wisdom.</p>
        
        <WordExtractor word="Inside" position={5} />
        
        <div>
          <h3>🎉 Congratulations, Detective!</h3>
          <p>You have successfully navigated through all five locations and collected the sacred words. Your mastery of navigation has been proven!</p>
          
          <div className={styles.finalChallenge}>
            <h3>🧩 Final Challenge</h3>
            <p>Now combine all five words you collected to form the secret message:</p>
            <div className={styles.wordCollection}>
              <span className={styles.collectedWord}>1. The</span>
              <span className={styles.collectedWord}>2. Secret</span>
              <span className={styles.collectedWord}>3. Code</span>
              <span className={styles.collectedWord}>4. Lies</span>
              <span className={styles.collectedWord}>5. Inside</span>
            </div>
            <p>Form the sentence and use it as your next navigation destination!</p>
            <p>Hint: Convert the sentence to kebab-case for the URL (replace spaces with hyphens)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
