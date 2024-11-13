import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";

import Home from "./pages/Home";
import Dresses from "./pages/Dresses";
import Leggings from './pages/Leggings';
import Outfits from './pages/Outfits';
import Rompers from './pages/Rompers';
import Shorts from './pages/Shorts';
import Skorts from './pages/Skorts';

import Anime from './pages/Anime';
import Cartoon from './pages/Cartoon';
import Contact from './pages/Contact';
import ClothingItem from './pages/ClothingItem';
import KeychainItem from './pages/KeychainItem';

import Cart from './pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="dresses" element={(<Dresses />)} />
          <Route path="leggings" element={(<Leggings />)} />
          <Route path="outfits" element={(<Outfits />)} />
          <Route path="rompers" element={(<Rompers />)} />
          <Route path="shorts" element={(<Shorts />)} />
          <Route path="skorts" element={(<Skorts />)} />
          <Route path="anime" element={(<Anime />)} />
          <Route path="cartoon" element={(<Cartoon />)} />
          <Route path="contact" element={(<Contact />)} />
          <Route path="clothingitem" element={(<ClothingItem/>)} />
          <Route path="keychainitem" element={(<KeychainItem/>)} />
          <Route path="cart" element={(<Cart />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
 <App />
);