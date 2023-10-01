// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Reviews from './Reviews'
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} /> {/* Add Login component */}
      </Switch>
    </Router>
  );
}

export default App;

