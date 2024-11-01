import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dresses from "./pages/Dresses";
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout/>)}>
          <Route index element={(<Home/>)}/>
          <Route path="dresses" element={(<Dresses/>)}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App/>
);