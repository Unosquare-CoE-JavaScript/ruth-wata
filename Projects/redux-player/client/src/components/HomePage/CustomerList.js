import { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';
import useHttp from '../../hooks/useHttp';

export default function CustomerList() {
  const [customerData, setCustomerData] = useState([]);
  const [emptyDataMsg, setEmptyDataMsg] = useState('');
  const { fn } = useHttp();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const requestConfig = {
      url: 'http://localhost:2121/api/customers/find',
      headers: config,
    };

    const applyData = (data) => {
      if (data.length === 0) {
        setEmptyDataMsg('You have no customer review. Go to add');
      }
      console.log(data);

      setCustomerData(data);
    };

    const errorHandling = () => {
      console.log('error, unable to retrieved data');
    };

    fn(requestConfig, applyData, errorHandling);
  }, [fn]);

  console.log(customerData);

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
