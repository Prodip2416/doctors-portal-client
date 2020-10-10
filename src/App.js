import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AllPatients from './components/AllPatients/AllPatients';
import Appointment from './components/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login/login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
           <Dashboard/>
          </Route>
          <Route path="/dashboard/allPatients">
            <AllPatients/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
