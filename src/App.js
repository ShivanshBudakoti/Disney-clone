import {Route,BrowserRouter as Router,Routes as Switch }from 'react-router-dom';
import React from 'react';
import "./index.css";
import Login from './components/login';
import Header from './components/header';
import Home from './components/home';
import Detail from './components/detail';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
     <Switch>
       <Route path='/home' element={<Home/>}></Route>
       <Route path="/" element={<Login/>}/>
       <Route path='/detail/:id' element={<Detail/>}/>
     </Switch>
     </Router>
      </div>
  );
}

export default App;
