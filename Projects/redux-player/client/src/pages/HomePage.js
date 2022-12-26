import Navigation from '../components/Navigation/Navigation';
import Layout from '../components/Layout';
import CustomerList from '../components/HomePage/CustomerList';

export default function HomePage() {
  return (
    <Layout>
      <CustomerList />
    </Layout>
  );
}
