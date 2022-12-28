import { useState, useEffect } from 'react';

const filledStar = require('../../imgs/star.png');
const emptyStar = require('../../imgs/star-empty.png');

export default function StarRating({ setStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setStars(rating + 1);
  }, [rating]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        return (
          <button
            type="cursor-pointer"
            key={i}
            className={i <= rating ? 'text-yellow-600' : 'text-gray-200'}
            onClick={() => {
              setRating(i);
              setStars(rating);
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* <span className="star">
              <img src={filledStar} alt="filled star" />
            </span> */}

            <span className="text-2xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
