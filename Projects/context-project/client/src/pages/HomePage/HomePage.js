import { useState } from 'react';
import Layout from '../../components/Layout';
import CustomerList from '../../components/HomePage/CustomerList';
import SearchBox from '../../components/HomePage/SearchBox';

export default function HomePage() {
  const [enteredName, setEnteredName] = useState('');

  // const searchedName = (name) => {
  //   setEnteredName(name);
  //   console.log(name);
  //   console.log(enteredName);
  // };

  return (
    <Layout>
      <SearchBox setEnteredName={setEnteredName} />
      <CustomerList findByName={enteredName} />
    </Layout>
  );
}
