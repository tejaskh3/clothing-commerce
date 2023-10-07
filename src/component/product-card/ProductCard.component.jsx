import Button from '../button/Button.component.jsx';
import './ProductCard.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context.jsx';
const ProductCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(item);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
