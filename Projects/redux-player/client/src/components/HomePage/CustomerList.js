import { useState, useEffect } from 'react';

export default function CustomerList() {
  const [customerData, setCustomerData] = useState([]);
  const [emptyDataMsg, setEmptyDataMsg] = useState('');
  useEffect(() => {
    const retrievedCustomerData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const res = await fetch(
          'http://localhost:2121/api/cutomers/find',
          config
        );
        const data = await res.json();

        if (data.length === 0) {
          setEmptyDataMsg('You have no customer review. Go to add');
        }
        console.log(data);
      } catch (error) {
        console.log('error, unable to retrieved data');
      }
    };

    retrievedCustomerData();
  }, []);

  return (
    <div>
      {emptyDataMsg ? (
        <p>{emptyDataMsg}</p>
      ) : (
        <ul>
          <li>Review 1</li>
        </ul>
      )}
    </div>
  );
}
