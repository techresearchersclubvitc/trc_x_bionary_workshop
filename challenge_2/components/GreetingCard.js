// components/GreetingCard.js
import { useState } from 'react';
import styles from '../styles/GreetingCard.module.css'; // optional CSS

export default function GreetingCard({ name, occasion }) {
  const [showSurprise, setShowSurprise] = useState(false);



  return (
    <div className={styles.card}>
      <h2>{`Happy ${occasion}, ${name}!`}</h2>
      <button>
         
      </button>
      {showSurprise && <p className={styles.surprise}>🎉 You got a surprise! 🎉</p>}
    </div>
  );
}


