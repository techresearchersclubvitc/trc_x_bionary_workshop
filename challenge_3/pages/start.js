import Layout from '../components/Layout';
import WordExtractor from '../components/WordExtractor';
import NavigationHint from '../components/NavigationHint';

export default function Start() {
  return (
    <Layout title="Start - CTF Challenge">
      <div>
        <h2>🏁 The Starting Line</h2>
        <p><strong>Secret</strong> pathways await those brave enough to venture forward. This is where your true journey begins into the unknown territories of knowledge.</p>
        
        <WordExtractor word="Secret" position={2} />
        
        <div>
          <h3>⚡ The Path Forward</h3>
          <p>You have crossed the threshold into a world where logic and intuition must work hand in hand. The next destination requires wisdom and learning.</p>
          <p>Ancient scholars knew that true knowledge comes from dedicated study and practice. They gathered in special places designed for learning and growth.</p>
        </div>

        <NavigationHint 
          hint="Knowledge seekers gather in rooms filled with desks and books, where lessons are taught and minds are shaped. Where do students learn?"
          nextRoute="/classroom"
        />
      </div>
    </Layout>
  );
}
