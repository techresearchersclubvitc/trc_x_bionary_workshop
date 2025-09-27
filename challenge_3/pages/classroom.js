import Layout from '../components/Layout';
import WordExtractor from '../components/WordExtractor';
import NavigationHint from '../components/NavigationHint';

export default function Classroom() {
  return (
    <Layout title="Classroom - CTF Challenge">
      <div>
        <h2>📚 The Hall of Learning</h2>
        <p><strong>Code</strong> and wisdom flow like rivers through these halls where knowledge is shared and minds are expanded. This sacred space has witnessed countless discoveries.</p>
        
        <WordExtractor word="Code" position={3} />
        
        <div>
          <h3>🎓 Academic Sanctuary</h3>
          <p>Within these walls, the greatest minds have pondered life's mysteries. Students and teachers have gathered here for generations, passing down wisdom through the ages.</p>
          <p>But even the most dedicated scholars need a place to store their accumulated knowledge - a repository of books and manuscripts where information can be preserved and accessed.</p>
        </div>

        <NavigationHint 
          hint="Where books live and knowledge is stored? Between fiction and non-fiction, where scholars research and students study quietly."
          nextRoute="/library"
        />
      </div>
    </Layout>
  );
}
