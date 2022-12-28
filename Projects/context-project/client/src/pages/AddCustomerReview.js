import { useState, useContext } from 'react';
import AuthContext from '../store/auth-context';
import Layout from '../components/Layout';
import StarRating from '../components/AddCustomerReview/StarRating';

export default function AddCustomerReview() {
  const [customerReview, setCustomerReview] = useState({
    name: '',
    review: '',
  });

  const [stars, setStars] = useState(1);

  const { token } = useContext(AuthContext);

  const sendReview = async () => {
    try {
      const res = await fetch('http://localhost:2121/api/customers/add', {
        method: 'POST',
        body: JSON.stringify({
          customerName: customerReview.name,
          review: customerReview.review,
          stars: stars,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(customerReview);

    setCustomerReview({
      name: '',
      review: '',
      stars: 0,
    });
  };

  const handleFormSub = (e) => {
    e.preventDefault();

    sendReview();
  };

  console.log(stars);

  return (
    <Layout>
      <div className="flex justify-center mt-6">
        <section
          className="
           bg-gray-900
          flex 
          flex-col
          justify-center 
          pl-8
          pr-8
          rounded-lg
        "
        >
          <div>
            <StarRating setStars={setStars} />
          </div>
          <form onSubmit={handleFormSub} className=" mt-4 mb-4 ">
            <label
              htmlFor="customer-name "
              className="block text-sm font-semibold text-gray-400"
            >
              Customer name
            </label>
            <input
              type="text"
              id="customer-name"
              value={customerReview.name}
              onChange={(e) =>
                setCustomerReview((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              className="block w-full px-4 py-2 mt-2 text-purple-700 text-m bg-bg-50 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <label
              htmlFor="customer-name "
              className="block text-sm font-semibold text-gray-400"
            >
              Comment
            </label>
            <textarea
              type="text"
              id="customer-name"
              value={customerReview.review}
              onChange={(e) =>
                setCustomerReview((prevState) => ({
                  ...prevState,
                  review: e.target.value,
                }))
              }
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-blue-50 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <div className="mt-6">
              <button
                className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 rounded-md  focus:outline-none focus:bg-purple-600`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
