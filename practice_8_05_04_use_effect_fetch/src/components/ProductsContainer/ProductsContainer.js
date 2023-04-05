import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsContainer.module.css';

const ProductsContainer = ({ products }) => {
  return (
    <div className={s.products__container}>
      {products.map(elem => (
        <ProductItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default ProductsContainer;
