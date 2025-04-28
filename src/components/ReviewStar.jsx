import { FaStar } from 'react-icons/fa';

export default function ReviewStar({ noOfStars }) {
  return (
    <div className="review-star-rating">
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar key={index} color="gold" />
      ))}
    </div>
  );
}
