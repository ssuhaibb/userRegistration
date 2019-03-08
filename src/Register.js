import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            errorPassword: ''
        }
    }

    usernameHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    passwordHandler = (e) => {
        this.setState({ password: e.target.value })
    }

    confirmPasswordHandler = (e) => {
        this.setState({ confirmPassword: e.target.value })
    }


    onSubmit = () => {
        const userDetails = {
            username: this.state.username,
            password: this.state.password
        }

        if (this.state.password === this.state.confirmPassword) {
            localStorage.setItem('user', JSON.stringify(userDetails));
            this.props.history.push('/user');
        }
        else {
            this.setState({ errorPassword: 'Passwords Do Not Match.' })
        }

    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col text-center">
                                <h2>Register</h2>
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="text"
                                    className="form-control" placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.usernameHandler}
                                />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="password"
                                    className="form-control" placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.passwordHandler}
                                />
                            </div>
                            <div className="col">
                                <input type="password"
                                    className="form-control" placeholder="Confirm Password"
                                    value={this.state.confirmPassword}
                                    onChange={this.confirmPasswordHandler}
                                />
                            </div>
                           
                        </div>
                        <small style={{color:'red'}}>{this.state.errorPassword}</small>
                        <div className="row justify-content-start mt-4">
                            <div className="col">
                                <button className="btn btn-primary mt-4" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
