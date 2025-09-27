import Layout from '../components/Layout';
import Link from '@/my-app/node_modules/next/link';
import styles from '../styles/CTF.module.css';

export default function Home() {
  return (
    <Layout title="CTF Challenge - Start Here">
      <div className={styles.startPage}>
        <h2>🚀 Welcome to the Navigation Challenge!</h2>
        <div className={styles.instructions}>
          <p>Your mission: Navigate through different pages using Next.js routing concepts.</p>
          <p>Collect the first word from each page and form the final secret message!</p>
          <h3>Rules:</h3>
          <ul>
            <li>✅ Follow the hints to navigate to the correct pages</li>
            <li>✅ Extract the first word from each page's content</li>
            <li>✅ Use manual navigation (type URLs in the address bar)</li>
            <li>✅ Collect all 5 words to solve the mystery</li>
          </ul>
        </div>
        <Link href="/welcome" className={styles.startButton}>
          🎯 Start the Challenge
        </Link>
      </div>
    </Layout>
  );
}
