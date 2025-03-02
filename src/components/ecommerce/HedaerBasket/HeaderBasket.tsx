import styles from "./styles.module.css";
import Logo from "@assets/svg/cart.svg?react";

const { basketContainer, basketQuantity, cartIcon } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo className={cartIcon} title="Basket Icon" />
      <div className={basketQuantity}></div>
    </div>
  );
};

export default HeaderBasket;
