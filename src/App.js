import React from 'react';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';
// import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
// import { PrivateRoute, Switch, Redirect } from 'react-router-dom';
// import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import First from './Component/First';
import Signup from './Component/Signup';
import Dash from './Component/Dash';
import Signin from './Component/Signin';
import Books from './Component/Books';
import Test from './Component/Test';
import C from './Component/C';
import CNet from './Component/CNet';
import Cobol from './Component/Cobol';
import Java from './Component/Java';
import Sql from './Component/Sql';
import ReactJs from './Component/ReactJs';
import Redux from './Component/Redux';
import Node from './Component/Node';



const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (
  (localStorage.getItem('token') && localStorage.getItem('user')) ? (
  <IncomingComponent {...props} />
  ) : (
  <Redirect to={{
  pathname: '/login',
  state: { from: props.location },
  }}
  />
  )
  )}
  />
  );
  

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           
           <Route exact path="/" component={First}></Route> 
           <Route exact path="/signup" component={Signup}></Route> 
           <Route exact path="/signin" component={Signin}></Route>
           <Route exact path="/board" component={Dash}></Route>  
           <Route exact path="/books" component={Books}></Route>
           <Route exact path="/test" component={Test}></Route>
           <Route exact path="/c" component={C}></Route>
           <Route exact path="/net" component={CNet}></Route>
           <Route exact path="/cobol" component={Cobol}></Route>
           <Route exact path="/java" component={Java}></Route>
           <Route exact path="/sql" component={Sql}></Route>
           <Route exact path="/react" component={ReactJs}></Route>
           <Route exact path="/redux" component={Redux}></Route>
           <Route exact path="/node" component={Node}></Route>


        
           {/* <PrivateRoute exact path="/" component={Frist}></PrivateRoute> 
           <PrivateRoute exact path="/signup" component={Signup}></PrivateRoute> 
           <PrivateRoute exact path="/signin" component={Signin}></PrivateRoute>
           <PrivateRoute exact path="/board" component={Dash}></PrivateRoute>  
           <PrivateRoute exact path="/books" component={Books}></PrivateRoute>
           <PrivateRoute exact path="/test" component={Test}></PrivateRoute>
           <PrivateRoute exact path="/c" component={C}></PrivateRoute>
           <PrivateRoute exact path="/net" component={CNet}></PrivateRoute>
           <PrivateRoute exact path="/cobol" component={Cobol}></PrivateRoute>
           <PrivateRoute exact path="/java" component={Java}></PrivateRoute>
           <PrivateRoute exact path="/sql" component={Sql}></PrivateRoute>
           <PrivateRoute exact path="/react" component={ReactJs}></PrivateRoute>
           <PrivateRoute path="/redux" component={Redux}></PrivateRoute>
           <PrivateRoute path="/node" component={Node}></PrivateRoute>  */}
           
        </Switch>
      </Router>
    </div>
  );
}

export default App;
