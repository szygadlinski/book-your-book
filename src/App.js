import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Product } from './components/views/Product/Product';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createTheme({
  palette: {
    primary: { main: '#0f5d42' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/product/:id' component={Product} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={Order} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
