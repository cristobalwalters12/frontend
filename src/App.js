import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login  from './components/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route path='/dashboard'exact render={ props=>(<Dashboard{...props}/>)}/>
          <Route exact path="/" element={<Login/>}/>
         
          <Route exact path="/Nuevo" element={<Nuevo/>}/>
          <Route exact path="/Editar" element={<Editar/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
