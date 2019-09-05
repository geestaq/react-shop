import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout'
//importowanie routow
import Home from './components/pages/Home/HomePage';
import Product from './components/pages/Product/ProductPage';
import Cart from './components/pages/Cart/CartPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
