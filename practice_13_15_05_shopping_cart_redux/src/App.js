import React from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductsContainer from './components/AddProductForm/ProductsContainer/ProductsContainer';
import CartContainer from './components/CartContainer/CartContainer';

const App = () => {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
      <CartContainer />
    </div>
  );
};

export default App;
