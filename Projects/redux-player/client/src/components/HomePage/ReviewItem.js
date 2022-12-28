const filledStar = require('../../imgs/star.png');

export default function ReviewImage({ name, review, stars }) {
  return (
    <li
      className="
            w-full
            flex
            justify-between
            pr-8
            pl-8
            bg-blue-100
            rounded-md
            pt-4
            pb-4
            
    "
    >
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-700">{name}</span>
        <span className="text-gray-700">{review}</span>
      </div>

      <div>
        {[...Array(stars)].map((star, i) => (
          <span className="text-2xl text-yellow-600" key={i}>
            &#9733;
          </span>
        ))}
        <span className="ml-2 text-gray-600">{stars}.0</span>
      </div>
    </li>
  );
}
