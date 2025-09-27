import Layout from '../components/Layout';
import WordExtractor from '../components/WordExtractor';
import NavigationHint from '../components/NavigationHint';

export default function Library() {
  return (
    <Layout title="Library - CTF Challenge">
      <div>
        <h2>📖 The Repository of Knowledge</h2>
        <p><strong>Lies</strong> have no place in this sanctuary of truth, where countless volumes of wisdom are carefully preserved and catalogued for future generations.</p>
        
        <WordExtractor word="Lies" position={4} />
        
        <div>
          <h3>📚 Temple of Information</h3>
          <p>These towering shelves have stood as silent guardians of human knowledge for centuries. Every book, every scroll, every manuscript tells a story of discovery and learning.</p>
          <p>Yet even in this open house of learning, there are some treasures too valuable to leave unprotected. The most precious artifacts require special security measures.</p>
        </div>

        <NavigationHint 
          hint="Behind locked doors and heavy security, where the most valuable treasures are kept safe from harm. What secures precious things?"
          nextRoute="/vault"
        />
      </div>
    </Layout>
  );
}
