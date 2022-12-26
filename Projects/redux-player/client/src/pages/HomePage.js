import Navigation from '../components/Navigation/Navigation';
import CustomerList from '../components/HomePage/CustomerList';

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <CustomerList />
      <h1 className="border-10">Hi</h1>
    </div>
  );
}
