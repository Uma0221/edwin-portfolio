import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from '../store/reducer';

import path from './path';

import HomePage from '../layouts/HomePage';
import WorkPage from '../layouts/WorkPage';

function Router() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path={path.homePage} element={<HomePage />}></Route>
          <Route
            exact
            path={`${path.homePage}/:navItem`}
            element={<HomePage />}
          ></Route>
          <Route
            exact
            path={`${path.workPage}/:collection/:work`}
            element={<WorkPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default Router;
