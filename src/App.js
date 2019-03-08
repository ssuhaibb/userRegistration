import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './User';
import Register from './Register';
import Posts from './Posts';
class App extends Component {




  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Register} />
          <Route path='/user' component={User} />
          <Route path ='/posts' component ={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
