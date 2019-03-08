import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginName: '',
            loginPassword: ''
        }
    }

    getUserData = () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        this.setState({
            username: userData.username,
            password: userData.password
        })
    }

    loginNameHandler = (e) => {
        this.setState({ loginName: e.target.value })
    }

    LoginPasswordHandler = (e) => {
        this.setState({ loginPassword: e.target.value })
    }

    onLogin = () => {
        if (this.state.loginName === this.state.username && this.state.loginPassword === this.state.password) {
            this.props.history.push('/posts');
        }
        else {
            alert('Username or Password is wrong');
        }
    }

    componentDidMount() {
        this.getUserData();

    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col text-center">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="text"
                                    className="form-control" placeholder="Username"
                                    value={this.state.loginName}
                                    onChange={this.loginNameHandler}
                                />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="password"
                                    className="form-control" placeholder="Password"
                                    value={this.state.loginPassword}
                                    onChange={this.LoginPasswordHandler}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-start mt-4">
                            <div className="col">
                                <button className="btn btn-primary mt-4" onClick={this.onLogin}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
