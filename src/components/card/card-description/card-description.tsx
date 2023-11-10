import React, { useState } from "react";
import "./card-description.scss";
import "../card-preview/card-preview.scss";

interface ProductColorOption {
  colorName: string;
  imageUrl: string;
}

interface ProductDetails {
  name: string;
  price: number;
  colorOptions: ProductColorOption[];
}

interface CardPreviewProps {
  product: ProductDetails;
}

const CardDescription: React.FC<CardPreviewProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(product.colorOptions[0].imageUrl);

  const handleColorSelection = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <>
      <div className="description">
        <img className="description__img" src={currentImage} alt={product.name} />
        <div className="description__textarea">
          <div className="description__title">
            <h2 className="description__title__name">{product.name}</h2>
            <h2 className="description__title__name--secondary">{product.name}</h2>
          </div>
          <p className="description__textarea__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <h3 className="description__textarea__price">€{product.price.toFixed(2)}</h3>
          <button className="description__textarea__btn">Add to cart</button>
          <ul className="preview__selector">
            {product.colorOptions.map((option) => (
              <li className="preview__selector--color" key={option.colorName} onClick={() => handleColorSelection(option.imageUrl)}>
                {option.colorName.charAt(0).toUpperCase() + option.colorName.slice(1)}
              </li>
            ))}
          </ul>
          <div className="description__textarea__colors"></div>
        </div>
      </div>
    </>
  );
};

export default CardDescription;
