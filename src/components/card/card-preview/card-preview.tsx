import "./card-preview.scss";

const CardPreview = () => {
  return (
    <div className="preview">
      <img className="preview__img" src="src\assets\products\shoes\adidas-run_black.webp" alt="product name" />
      <h2 className="preview__name">Product Name</h2>

      <h3 className="preview__price">€24.99</h3>
      <ul className="preview__selector">
        <li>Black</li>
        <li>Blue</li>
        <li>Grey</li>
      </ul>
    </div>
  );
};

export default CardPreview;
