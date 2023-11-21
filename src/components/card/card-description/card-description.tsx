import React, { useState } from "react";
import "./card-description.scss";
import "../card-preview/card-preview.scss";
import Rating from "../../rating/rating";

interface ProductColorOption {
  colorName: string;
  imageUrl: string;
}

interface ProductDetails {
  name: string;
  price: number;
  colorOptions: ProductColorOption[];
  rating: number;
}

interface CardDescriptionProps {
  product: ProductDetails;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(product.colorOptions[0].imageUrl);

  const handleColorSelection = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="description__container">
      <div className="description">
        <img className="description__img" src={currentImage} alt={product.name} />
        <div className="description__textarea">
          <div className="description__title">
            <h2 className="description__title__name">{product.name}</h2>
            <h2 className="description__title__name--secondary">{product.name}</h2>
          </div>
          <div className="description__rating">
            {[...Array(5)].map((_, index) => (
              <Rating key={index} filled={index < product.rating} />
            ))}
          </div>

          <p className="description__textarea__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <ul className="description__selector">
            {product.colorOptions.map((option) => (
              <li className="description__selector--color" key={option.colorName} onClick={() => handleColorSelection(option.imageUrl)} style={{ backgroundColor: option.colorName }}></li>
            ))}
          </ul>
          <h3 className="description__textarea__price">€{product.price.toFixed(2)}</h3>
          <button className="description__textarea__btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
