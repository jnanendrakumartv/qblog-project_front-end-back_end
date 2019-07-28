import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
