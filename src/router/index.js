import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from '../store/reducer';

import path from './path';

import HomePage from '../layouts/HomePage';
import WorkPage from '../layouts/WorkPage';

function Router() {
  let lastPage = () => {
    window.location.replace(location.href);
  };

  useEffect(() => {
    window.addEventListener('popstate', lastPage);
    return () => {
      window.removeEventListener('popstate', lastPage);
    };
  }, []);

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
            path={`${path.workPage}/:collection`}
            element={<WorkPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default Router;
