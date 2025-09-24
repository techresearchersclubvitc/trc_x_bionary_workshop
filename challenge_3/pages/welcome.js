import Layout from '../components/Layout';
import WordExtractor from '../components/WordExtractor';
import NavigationHint from '../components/NavigationHint';

export default function Welcome() {
  return (
    <Layout title="Welcome - CTF Challenge">
      <div>
        <h2>🎊 Welcome to the Adventure!</h2>
        <p><strong>The</strong> journey of a thousand miles begins with a single step. You have taken that first step by arriving here.</p>
        
        <WordExtractor word="The" position={1} />
        
        <div>
          <h3>📖 Your Quest Begins</h3>
          <p>Every great adventure needs a beginning. You are now ready to embark on a digital treasure hunt that will test your navigation skills.</p>
          <p>The ancient scrolls speak of five mystical words scattered across this digital realm. Only those who master the art of navigation can collect them all.</p>
        </div>

        <NavigationHint 
          hint="Where do all great adventures begin? Look for the place where journeys commence and paths unfold."
          nextRoute="/start"
        />
      </div>
    </Layout>
  );
}
