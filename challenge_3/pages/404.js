import Layout from '../components/Layout';
import Link from '@/my-app/node_modules/next/link';
import styles from '../styles/CTF.module.css';

export default function Custom404() {
  return (
    <Layout title="Lost in Navigation - 404">
      <div className={styles.error404}>
        <h2>🗺️ Navigation Error!</h2>
        <p>Looks like you've wandered off the path, detective. This page doesn't exist in our digital realm.</p>
        <div className={styles.errorHint}>
          <p>💡 <strong>Hint:</strong> Double-check your URL structure. Remember to:</p>
          <ul>
            <li>Use lowercase letters</li>
            <li>Replace spaces with hyphens for multi-word routes</li>
            <li>Follow the clues carefully</li>
          </ul>
        </div>
        <Link href="/" className={styles.homeButton}>
          🏠 Return to Start
        </Link>
      </div>
    </Layout>
  );
}
