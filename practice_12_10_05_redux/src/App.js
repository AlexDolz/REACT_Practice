import React from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

// 2. Создать форму добавления продуктов (два инпута + кнопка - название товара и его цена)
// 3. Научить форму собирать данные, формировать из них объект и выводить его в консоль

const App = () => {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
    </div>
  );
};

export default App;
