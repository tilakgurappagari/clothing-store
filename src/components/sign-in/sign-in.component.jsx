import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component{
    state={
        email:'',
        password : ''

    }

    onHandleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:"", password:""});
    }
    onHandleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]: value});

    }



    render(){
        return(
            <div className='sign-in'>
                    <h2>Already have an Account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.onHandleSubmit}>
                        <FormInput name="email"
                         type="email" 
                         value={this.state.email}
                         onHandleChange={this.onHandleChange}
                         label="email"
                          required />
                        

                        <FormInput name="password"
                         type="password"
                          value={this.state.password}
                          onHandleChange={this.onHandleChange}
                          label="password"
                           required autoComplete="off" />
                        
                        <div className="buttons">
                        <Button type="submit"  >SIGN IN</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn >
                            SIGN IN WITH GOOGLE</Button>

                        </div>
                    </form>
            </div>
        );
    }
}

export default SignIn;