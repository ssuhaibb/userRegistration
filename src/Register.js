/**
    This is user's SignUp component
*/

import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userNameErrorMessage: '',
            passwordErrorMessage: '',
            isValidUserName: false,
            isValidPassword: false,
            isValidForm: false
        }
    } 

    usernameHandler = (event) => {
        this.setState({ username: event.target.value }, this.validateUserName)
    }

    /**
     'isEmailValid' function will return true if email(username) is valid otherwise it will return false 
    */
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

    /**
        'validatePassword' this function used to validate the password and set the error message.
        Password must be contain 5 characters 
    */
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

    /**
        'validateForm' this fucntion used to validate the form if all field filled correctly then signup button enable
    */
    validateForm() {
        const isValidForm = this.state.isValidUserName && this.state.isValidPassword;
        this.setState({isValidForm});
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.push('/login');      

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col text-center">
                                    <h2>Register</h2>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input 
                                        type="text"
                                        required
                                        className="form-control" placeholder="Email(Username)"
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
                                        SignUp
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

