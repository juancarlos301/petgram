import React, { useContext } from 'react';
import { Home } from './pages/Home';
import { Logo } from './components/logo';
import { GlobalStyle } from './styles/globalStyles';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail';
import { Navbar } from './components/navbar/navbar'
import { Favs } from './pages/favs';

import { NotRegisteredUser } from './pages/notRegistedUser'
import { User } from './pages/user'
import { AppContext } from './contex'
import { NotFound } from './pages/NotFound';


export const App = () => {

  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
        <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

