import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import First from './Component/First';
import Register1 from './Component/Register1';
import Dash from './Component/Dash';
import LogIn from './Component/LogIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/first" component={First}></Route> 
           <Route exact path="/reg" component={Register1}></Route> 
           <Route exact path="/login" component={LogIn}></Route>
           <Route exact path="/board" component={Dash}></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
