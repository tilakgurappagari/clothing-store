import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from './containers/shop/shop.component';





function App() {
  return (
    <div >
      <Header />
<Switch>

            <Route exact  path='/' component={HomePage} />
           <Route  path='/shop' component={ShopPage} />

</Switch>
    </div>
  );
}

export default App;
