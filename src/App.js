
import './App.css';

import {  Routes, Route, Navigate } from 'react-router-dom';


import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/"
        element={<Navigate to="/login" replace />}
      />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={ <Home />} />

      

      </Routes>

      
      

    </div>
  );
}

export default App;
