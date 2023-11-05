import React, { useState } from "react";
import "./card-preview.scss";
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

const CardPreview: React.FC<CardPreviewProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(product.colorOptions[0].imageUrl);

  const handleColorSelection = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="preview">
      <img className="preview__img" src={currentImage} alt={product.name} />
      <h2 className="preview__name">{product.name}</h2>
      <h3 className="preview__price">€{product.price.toFixed(2)}</h3>
      <ul className="preview__selector">
        {product.colorOptions.map((option) => (
          <li key={option.colorName} onClick={() => handleColorSelection(option.imageUrl)}>
            {option.colorName.charAt(0).toUpperCase() + option.colorName.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardPreview;
