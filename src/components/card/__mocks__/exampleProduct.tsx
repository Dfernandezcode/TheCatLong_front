import AdidasBlackImg from "../../../assets/products/shoes/adidas-run_black.webp";
import AdidasBlueImg from "../../../assets/products/shoes/adidas-run_blue.webp";
import AdidasGreyImg from "../../../assets/products/shoes/adidas-run_grey.webp";

interface ProductDetails {
  name: string;
  price: number;
  colorOptions: {
    colorName: string;
    imageUrl: string;
  }[];
}

const exampleProduct: ProductDetails = {
  name: "Adidas Running Shoe",
  price: 79.99,
  colorOptions: [
    { colorName: "black", imageUrl: AdidasBlackImg },
    { colorName: "blue", imageUrl: AdidasBlueImg },
    { colorName: "grey", imageUrl: AdidasGreyImg },
  ],
};

export { exampleProduct };
