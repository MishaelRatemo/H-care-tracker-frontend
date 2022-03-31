
import './App.css';
import Home from './Landing_page/Home';
import Donor from './Landing_page/donor';
import { Route, Routes } from "react-router-dom";
import Contact from './Landing_page/Contact';
import Makerequest from './Landing_page/makerequest';

// import Makerequest from './Landing_page/makerequest';



function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path="/" element={ <Home />}/>
       <Route exact path="/contact" element={ <Contact />}/>
       <Route exact path="/donor" element={ <Donor />}/>
       <Route exact path="/makerequest" element={ <Makerequest />}/>

       
     </Routes>
     

    
    </div>
  );
}

export default App;
