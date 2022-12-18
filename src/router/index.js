import React from 'react';
import { StoreProvider } from '../store/reducer';

import Home from '../layouts/home';

function Router() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}

export default Router;
