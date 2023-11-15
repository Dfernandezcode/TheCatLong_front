import "./rating.scss";

interface RatingProps {
  filled: boolean;
}

const Rating: React.FC<RatingProps> = ({ filled }) => {
  return <span className="rating__icon">{filled ? "★" : "☆"}</span>;
};

export default Rating;
