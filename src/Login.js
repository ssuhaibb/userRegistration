/**
    This is user's Login component
*/

import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userNameErrorMessage: '',
            passwordErrorMessage: '',
            isValidUserName: false,
            isValidPassword: false,
            isValidForm: false,
            isValidLoginUserName: true,
            isValidLoginPassword: true,
            isLogin: false
        }
    } 

    usernameHandler = (event) => {
        this.setState({ username: event.target.value }, this.validateUserName)
    }

    isEmailValid = email => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);        

    validateUserName = () => {
        const email = this.state.username;
        const isValid = this.isEmailValid(email);
        let userNameErrorMessage = '';
        if(isValid) {
            userNameErrorMessage = '';
        } else {
             userNameErrorMessage = 'Invalid email address';
        }
        this.setState({isValidUserName: isValid, userNameErrorMessage: userNameErrorMessage}, this.validateForm);
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value }, this.validatePassword)
    }

    validatePassword = () => {
        const password = this.state.password;
        const isValidPassword = password.trim().length > 4; 
        let passwordErrorMessage = '';

        if(isValidPassword) {
             passwordErrorMessage = '';
        } else {           
            passwordErrorMessage = 'Pasword must contain atleast 5 characters';
        }
        this.setState({isValidPassword: isValidPassword, passwordErrorMessage: passwordErrorMessage}, this.validateForm);
    }

    validateForm() {
        const isValidForm = this.state.isValidUserName && this.state.isValidPassword;
        this.setState({isValidForm});
    }

    /**
        'getLoginDataFromLOcalDB': Getting user data (email and password) from local storage
    */
    getLoginDataFromLOcalDB = () => JSON.parse(localStorage.getItem('user'));

    isValidLogin = () => {
        const { username, password } = this.state;
        const loginData = this.getLoginDataFromLOcalDB();
        const isValidLoginUserName = username === loginData.username;
        const isValidLoginPassword = password === loginData.password;
        const isLogin = isValidLoginUserName && isValidLoginPassword;
        
        localStorage.setItem('isLogin',isLogin); // 'isLogin' variable used to check the user is logedin or not
        
        this.setState({isValidLoginUserName, isValidLoginPassword,isLogin});
        return isLogin;
    }

    loginHandler = (event) => {
        event.preventDefault();
        const isValidLogin = this.isValidLogin();

        if(isValidLogin) {

            this.props.history.push('/posts');
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.loginHandler}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col text-center">
                                    <h2>Login</h2>
                                </div>
                            </div>
                            {!this.state.isValidLoginUserName && <small style={{color:'red'}}>Invalid Login User</small>}<br />
                            {!this.state.isValidLoginPassword && <small style={{color:'red'}}>Invalid Login Password</small>}
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input 
                                        type="text"
                                        required
                                        className="form-control" placeholder="Email"
                                        value={this.state.username}
                                        onChange={this.usernameHandler}
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <small style={{color:'red'}}>{this.state.userNameErrorMessage}</small>
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input 
                                        type="password"
                                        className="form-control" placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.passwordHandler}
                                        
                                    />
                                </div>
                            </div>
                          
                            {!this.state.isValidPassword && <small style={{color:'red'}}>{this.state.passwordErrorMessage}</small>}
                            
                            <div className="row justify-content-start mt-4">
                                <div className="col">
                                    <button 
                                        className="btn btn-primary mt-4" 
                                        disabled={!this.state.isValidForm}                                        
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
