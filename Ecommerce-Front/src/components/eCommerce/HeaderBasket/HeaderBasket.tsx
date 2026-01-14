import Logo from "@assets/images/icons/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <span className={basketQuantity}>0</span>
    </div>
  );
};

export default HeaderBasket;
