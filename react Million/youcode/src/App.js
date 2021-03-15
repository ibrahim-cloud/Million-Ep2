import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import JoinGroup from "./components/Join.component";
import choix from "./components/choixLogin";
import choixGroup from "./components/ChoixGroup";
import AdminLogin from "./components/AdminLogin";
import choixGAdmin from "./components/choixGadmin";
import AddQuestion from "./components/AddQuestion";
import AddAdmin from "./components/addAdmin";
import validationUser from "./components/validationUser";

import Game from "./components/Game";
import Winer from "./components/winner";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Million</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
         
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"} onClick={()=> localStorage.clear()} > log out</Link>
              </li>       
            </ul>
          </div>
        </div>
      </nav>


    
          <Switch>
          <Route path="/winer" render={(props) => <Winer {...props}/>}/>
          <Route path="/game" component={Game}/>
       <Route path="/validationUser" component={validationUser} />
          <Route path="/AddAdmin" component={AddAdmin} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <Route path="/AddQuestion" component={AddQuestion} />
            <Route path="/choixGAdmin" component={choixGAdmin} />
            <Route path="/choixG" component={choixGroup} />
            <Route path="/sign-in" component={Login} />
            <Route path="/create" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/JoinGroup" component={JoinGroup} />
            <Route path="/" component={choix} />
          </Switch>
        </div>  
    </Router>

    
  );
}

export default App;