import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from '../store/reducer';

import path from './path';

import HomePage from '../layouts/home';

function Router() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path={path.home} element={<HomePage />}></Route>
          <Route
            exact
            path={`${path.home}/:navItem`}
            element={<HomePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default Router;
