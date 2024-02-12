import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';
import "./app.css";
import ShopHeader from '../shop-header/shop-header';

const App = () => {
   return (
      <main role='main' className='container'>
         <ShopHeader numItems={5} total={210}/>
      <Routes>
         <Route index path="/" element={<HomePage/>}/>
         <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      </main>
   );
}

export default App;
