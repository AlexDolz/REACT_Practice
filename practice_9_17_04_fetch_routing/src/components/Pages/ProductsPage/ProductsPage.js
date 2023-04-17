import React, { useEffect, useState } from 'react';
import s from './ProductsPage.module.css';
import ProductsContainer from '../../ProductsContainer/ProductsContainer';

const ProductsPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://api.escuelajs.co/api/v1/products';
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <ProductsContainer products={products} />
    </div>
  );
};

export default ProductsPage;
