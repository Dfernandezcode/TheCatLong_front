import "./card-description.scss";

const CardDescription = () => {
  return (
    <>
      <div className="description">
        <img className="description__img" src="src\assets\products\shoes\adidas-run_black.webp" alt="product name" />
        <div className="description__textarea">
          <h2 className="description__textarea__name">Product Name</h2>
          <h2 className="description__textarea__name--secondary">Product Name</h2>
          <p className="description__textarea__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <h3 className="description__textarea__price">€24.99</h3>
          <button className="description__textarea__btn">Add to cart</button>
          <div className="description__textarea__colors"></div>
        </div>
      </div>
    </>
  );
};

export default CardDescription;
