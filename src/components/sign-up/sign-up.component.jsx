import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';


import './sign-up.styles.scss';

class SignUp extends Component{

    state = {
        displayName : '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    onHandleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
           await createUserProfileDocument(user, {displayName});
           this.setState({
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
           })
        }catch(error){
                console.error(error)
        }

    };
    onHandleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]: value});

    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">Do not have an account</h2>
                <span>Sign Up with email</span>
                <form className="sign-p-form" onSubmit={this.onHandleSubmit}>
                    <FormInput type='text'
                                name='displayName'
                                value={displayName}
                                onChange={this.onHandleChange}
                                label= 'Display Name'
                                required
                                >

                                </FormInput>

                     <FormInput type='email'
                                name='email'
                                value={email}
                                onChange={this.onHandleChange}
                                label= 'Email'
                                required
                                >

                     </FormInput>

                     <FormInput type='password'
                                name='password'
                                value={password}
                                onChange={this.onHandleChange}
                                label= 'Password'
                                required
                                autoComplete="off"
                                >

                    </FormInput>

                    <FormInput type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={this.onHandleChange}
                                label= 'Confirm Password'
                                required
                                autoComplete="off"
                                >

                    </FormInput>

                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        );
    }

}

export default SignUp;