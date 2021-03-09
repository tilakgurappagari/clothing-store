import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Authenticate from './containers/authenticate/authenticate.component';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from './containers/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';





class App extends Component {

  state = {
    currentUser : null
  }
unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user});
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
          });

      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount()
  {this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
  <Switch>
  
              <Route exact  path='/' component={HomePage} />
             <Route  path='/shop' component={ShopPage} />
             <Route  path='/auth' component={Authenticate} />
  
  
  </Switch>
      </div>
    );
  }
 
}

export default App;
