import Button from '../button/Button.component.jsx';
import './ProductCard.styles.scss';
const ProductCard = ({ item }) => {
  return (
    <div key={item.id} className="product-card-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button buttonType={'inverted'}>Add to Cart.</Button>
    </div>
  );
};

export default ProductCard;
