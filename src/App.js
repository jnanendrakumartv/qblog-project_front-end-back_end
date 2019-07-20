import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
// import HomePage from './Component/HomePage';
// import SignUp from './Component/SignUp';
import First from './Component/First';
import Register from './Component/Register';
import SignIn from './Component/SignIn';
import Dash from './Component/Dash';
import Home from './Component/Home';
import Signup1 from './Component/Signup1';
import LogIn from './Component/LogIn';
import DashBoard from './Component/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           {/* <Route exact path="/first" component={HomePage}></Route> */}
           {/* <Route exact path="/create" component={SignUp}></Route>   */}
           <Route exact path="/first" component={First}></Route> 
           <Route exact path="/reg" component={Register}></Route> 
           <Route exact path="/login" component={LogIn}></Route>
           <Route exact path="/board" component={Dash}></Route>
           <Route exact path="/home" component={Home}></Route> 
           <Route exact path="/signup" component={Signup1}></Route>  
           <Route exact path="/signin" component={SignIn}></Route>   
           <Route exact path="/dash" component={DashBoard}></Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
