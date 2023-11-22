import "./CardButton.scss";

type CardButtonProps = {
  title: string;
  imageUrl: string;
  onClick: (title: string) => void;
};

function CardButton({ title, imageUrl, onClick }: CardButtonProps) {
  return (
    <button className="cardButton__btn" style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => onClick(title)}>
      <span className="cardButton__title">{title}</span>
    </button>
  );
}

export default CardButton;
