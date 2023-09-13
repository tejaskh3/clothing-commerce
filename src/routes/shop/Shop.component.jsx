import { useContext } from 'react';
import './Shop.styles.scss'
import { ProductsContext } from '../../context/Products.context';
import ProductCard from '../../component/product-card/ProductCard.component'
const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className='products-container'>
      {products.map(item => {
        return <ProductCard item={item}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
