import './App.css';
import {Route, Switch} from "react-router-dom"
import React from 'react';
import LandingPage from './componets/LandingPage';
import Home from './componets/Home';
import Form from './componets/Form';
import Detail from './componets/Detail';
import Error from './componets/Error';



function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/recipes/:id" component={Detail}/>
          <Route path="/home" component={Home}/>
          <Route path="/create" component={Form}/>
          <Route path="*" component={Error}/>
      </Switch>

      
    </div>
  );
}

export default App;
