import React from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import CartContainer from './components/CartContainer/CartContainer';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

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
