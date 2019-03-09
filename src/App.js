import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Posts from './Posts';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Register} />
          <Route path='/login' component={Login} />
          <Route path ='/posts' component ={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
