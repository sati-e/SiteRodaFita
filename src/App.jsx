import React from 'react';
import HomePage from './assets/components/home';
import UpperPage from './assets/components/navBar/upperPage';
import Login from './assets/components/Login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './assets/components/Login/cadastrar';
import { UniversalStyle } from "./assets/components/styles/universalStyle";


function App () {
  return (
    <UniversalStyle>  
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/upperPage" element={<UpperPage />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/cadastrar" element={<Cadastrar />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </UniversalStyle>
  );
}

export default App;
