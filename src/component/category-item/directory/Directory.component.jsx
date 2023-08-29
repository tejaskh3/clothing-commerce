import './Directory.styles.scss';
import CategoryItem from "../CategoryItem";
const Directory = ({category}) => {
  return (
    <div className="categories-container">
      {category.map(item => {
        return <CategoryItem item={item}></CategoryItem>;
      })}
    </div>
  )
}

export default Directory;
