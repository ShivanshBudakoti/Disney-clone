import {Route,BrowserRouter as Router,Routes as Switch }from 'react-router-dom';
import React from 'react'
import "./index.css";
import Login from './components/login';
import Header from './components/header';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
     <Switch>
       <Route path="/" element={<Login/>}/>
     </Switch>
     </Router>
      </div>
  );
}

export default App;
