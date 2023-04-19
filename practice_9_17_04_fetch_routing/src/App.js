import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import UsersPage from './components/Pages/UsersPage/UsersPage';
import './App.css';
import RolePage from './components/Pages/RolePage/RolePage';

// 1. Создать три страницы - MainPage, UsersPage, ProductsPage
// 2. Создат компонент NavManu (Main, Products, Users), стилизовать его
// 3. Настроить роутинг между страницами, при клике на ссылки меню открывается нужная страница
// 4. Создать компоненты Product и ProductsContainer
// 5. На странице ProductsPage вывести карточки с товарами (title, price, description). Данные о товарах взять по ссылке https://api.escuelajs.co/api/v1/products (отправить fetch get-запрос)
// 7. Если товар стоит 500 и больше, то сделать карточку светло-розовую, а если дешевле - то светло-зеленую

// ---------------- Homework ------------------------------------------

// 1. Создать три страницы MainPage, AdminsPage, CustomersPage
// 2. Настроить между ними роутинг
// 3. На главной странице сделать две карточки Admins и Customers. При клике на каждую карточку перебрасывать на соответствующую страницу
// 4. Отправить запрос по ссылке: https://api.escuelajs.co/api/v1/users
// 5. На страницах AdminsPage и CustomersPage создать карточки юзеров, подходящие по ролям
// 6. Стилизовать карточки

const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:role' element={<RolePage />} />
      </Routes>
    </div>
  );
};

export default App;
