import React, { useEffect, useState } from 'react';
import productsReq from './requests/productsReq';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Form from './components/Form/Form';

// 1. Написать функцию (в отдельном файле), которая отправляет get-запрос по ссылке https://api.escuelajs.co/api/v1/products/ и выводит в консоль полученные данные

// 2. Создать состояние products и записать в это состояние полученные данные
// 3. Вывести в консоль состояние products

// 4. Создать два компонента Product и ProductsContainer
// 5. Из состояния products отрисовать карточки (картинка, название, описание и цена)
// 6. Стилизовать карточки
// 4. Создать два компонента Product и ProductsContainer
// 5. Из состояния products отрисовать карточки (картинка, название, описание и цена). ProductsContainer - грид (5 колонок)
// 6. Стилизовать карточки

// 7. Создать форму (4 инпута и кнопка). Импортировать форму в App
// 8. При отправке формы формируется и выводится в консоль объект в формате

// {
//   "title": title.value,
//   "price": price.value, (число)
//   "description": description.value,
//   "categoryId": 0, (всем по умолчанию 0)
//   "images": default
// }

const App = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => productsReq(setProducts), []);

  return (
    <div>
      <Form />
      <ProductsContainer products={products} />
    </div>
  );
};

export default App;
