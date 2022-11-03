import React, { useDebugValue } from 'react'
import AppContainer from './pages/AppContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from './components/UserLayout';
import Category from './pages/Category';
import Detail from './pages/ProductDetail/Detail';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<AppContainer />} />
            <Route path={"/category/:categoryId"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
            <Route path={"/cart"} element={<div>Cart</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App