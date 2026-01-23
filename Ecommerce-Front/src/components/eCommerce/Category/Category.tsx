import styles from "./styles.module.css";
const { category, categoryImage, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImage}>
        <img src="https://placehold.co/300x300" alt="Category" />
      </div>

      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
