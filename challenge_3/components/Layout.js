import Head from 'next/head';
import styles from '../styles/CTF.module.css';

export default function Layout({ children, title = "CTF Navigation Challenge" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next.js Navigation CTF Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>🕵️ The Hidden Message Hunt</h1>
          <p>Navigate through pages to collect words and solve the mystery!</p>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>Next.js Navigation CTF Challenge © 2025</p>
        </footer>
      </div>
    </>
  );
}
