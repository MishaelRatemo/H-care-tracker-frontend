
import './App.css';
import Home from './Landing_page/Home';
import Donor from './Landing_page/donor';
import { Route, Routes } from "react-router-dom";
import Contact from './Landing_page/Contact';
import Makerequest from './Landing_page/makerequest';
import What from './Landing_page/whatwedo';

// import Makerequest from './Landing_page/makerequest';


import Login from './authentication/Login';
import Check from './authentication/Check-request';
import Register from './authentication/Register';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path="/" element={ <Home />}/>
       <Route exact path="/contact" element={ <Contact />}/>
       <Route exact path="/donor" element={ <Donor />}/>
       <Route exact path="/makerequest" element={ <Makerequest />}/>
       <Route exact path="/what" element={ <What />}/>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/register" element={<Register/>}/>
       <Route exact path="/check" element={<Check/>}/>

       
     </Routes>
     

    

  <Routes>
  
  </Routes>
    </div>
  );
}

export default App;
