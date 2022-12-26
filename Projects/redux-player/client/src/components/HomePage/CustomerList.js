import { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';

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
          'http://localhost:2121/api/customers/find',
          config
        );
        const data = await res.json();

        if (data.length === 0) {
          setEmptyDataMsg('You have no customer review. Go to add');
        }
        console.log(data);

        setCustomerData(data);
      } catch (error) {
        console.log('error, unable to retrieved data');
      }
    };

    retrievedCustomerData();
  }, []);

  return (
    <div
      className="
            flex
            justify-center
            mt-10
            "
    >
      {emptyDataMsg ? (
        <p>{emptyDataMsg}</p>
      ) : (
        <ul className=" w-3/4 flex flex-col items-center gap-4">
          {customerData.map((data) => (
            <ReviewItem
              key={data._id}
              name={data.customerName}
              review={data.review}
              stars={data.stars}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
