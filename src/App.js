import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from './containers/shop/shop.component';



const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
<Switch>
            <Route exact  path='/' component={HomePage} />
           <Route  path='/shop' component={ShopPage} />

</Switch>
    </div>
  );
}

export default App;
