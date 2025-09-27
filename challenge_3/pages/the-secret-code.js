import Layout from '../components/Layout';
import styles from '../styles/CTF.module.css';

export default function TheSecretCode() {
  return (
    <Layout title="Victory - CTF Challenge">
      <div className={styles.victoryPage}>
        <h2>🏆 CONGRATULATIONS!</h2>
        <div className={styles.flagContainer}>
          <h3>🚩 You have captured the flag!</h3>
          <div className={styles.flag}>
            <code>CTF{NAVIGATION_MASTER_2025}</code>
          </div>
        </div>
        
        <div className={styles.completionStats}>
          <h3>📊 Challenge Complete!</h3>
          <ul>
            <li>✅ Static routing mastered</li>
            <li>✅ Manual navigation completed</li>
            <li>✅ Word extraction successful</li>
            <li>✅ Logic puzzle solved</li>
            <li>✅ URL construction demonstrated</li>
          </ul>
        </div>

        <div className={styles.nextSteps}>
          <h3>🚀 What's Next?</h3>
          <p>You've mastered basic Next.js navigation! Ready for more advanced challenges?</p>
          <ul>
            <li>Try dynamic routing with [id] parameters</li>
            <li>Explore catch-all routes with [...slug]</li>
            <li>Learn about API routes and server-side navigation</li>
            <li>Master the useRouter hook for programmatic navigation</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
