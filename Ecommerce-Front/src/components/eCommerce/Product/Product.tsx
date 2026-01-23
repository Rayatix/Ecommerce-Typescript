import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { product, productImage } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImage}>
        <img src="https://placehold.co/100x100" alt="Product" />
      </div>
      <h2>Title</h2>
      <h3>10 Egp</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
