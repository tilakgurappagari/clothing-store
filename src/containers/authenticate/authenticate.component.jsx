import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

import './authenticate.styles.scss';

const Authenticate = () =>{
    return(
        <div className="authenticate">
           <SignIn />
        </div>
    );

}


export default Authenticate;