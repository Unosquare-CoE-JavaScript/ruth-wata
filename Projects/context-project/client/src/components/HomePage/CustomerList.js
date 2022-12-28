import { useState, useEffect, useContext } from 'react';
import ReviewItem from './ReviewItem';
import useHttp from '../../hooks/useHttp';
import AuthContext from '../../store/auth-context';

export default function CustomerList() {
  const [customerData, setCustomerData] = useState([]);
  const [emptyDataMsg, setEmptyDataMsg] = useState('');
  const { fn } = useHttp();

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      Authorization: `Bearer ${token}`,
    };

    const requestConfig = {
      url: 'http://localhost:2121/api/customers/find',
      headers: config,
    };

    const applyData = (data) => {
      if (data.length === 0) {
        setEmptyDataMsg('You have no customer review. Go to add');
      }

      setCustomerData(data);
    };

    const errorHandling = () => {
      console.log('error, unable to retrieved data');
    };

    fn(requestConfig, applyData, errorHandling);
  }, [fn]);

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
