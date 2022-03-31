
import './App.css';
import Login from './authentication/Login';
import Check from './authentication/Check-request';
import Register from './authentication/Register';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

  <Routes>
  <Route exact path="/" element={<Login/>}/>
  <Route exact path="/register" element={<Register/>}/>
  <Route exact path="/check" element={<Check/>}/>
  </Routes>
    </div>
  );
}

export default App;
