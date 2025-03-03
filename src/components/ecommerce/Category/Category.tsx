import styles from "./styles.module.css";

const { category, categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img src="https://placehold.co/180x120" alt="" />
      </div>

      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
