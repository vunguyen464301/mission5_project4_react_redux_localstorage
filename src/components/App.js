import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Hompage from '../components/Hompage';
import { BrowserRouter as Router, Route, Link ,Redirect,Switch} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import User from './User'
import Modal_show from '../containers/Modal_show';
import NotFound from './NotFound';
function App() {
  return (
   <div className="container">
     <Router>
     <Hompage/>
     <Switch>
     <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={User} />
          <Route component={NotFound}/>
      </Switch>
     </Router>
    {/* <Modal_show/> */}
   </div>
  );
}

export default App;
