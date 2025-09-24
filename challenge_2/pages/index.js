// pages/index.js
import GreetingCard from '../components/GreetingCard';

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Dynamic Greeting Cards</h1>
      <GreetingCard name="Amol" occasion="Birthday" />
      <GreetingCard name="Rahul" occasion="Graduation" />
      <GreetingCard name="Sneha" occasion="Promotion" />
    </div>
  );
}
