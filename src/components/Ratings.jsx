import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratings = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex space-x-1 items-center">
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1;

        return rating >= starNumber ? (
          <FaStar key={index} className="text-yellow-500 w-4 h-4" />
        ) : rating >= starNumber - 0.5 ? (
          <FaStarHalfAlt key={index} className="text-yellow-500 w-4 h-4" />
        ) : (
          <FaRegStar key={index} className="text-gray-400 w-4 h-4" />
        );
      })}
    </div>
  );
};

export default Ratings;
