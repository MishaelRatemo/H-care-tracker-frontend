
import './App.css';
import Home from './Landing_page/Home';
import { Route, Routes } from "react-router-dom";
// import Makerequest from './Landing_page/makerequest';



function App() {
  return (
    <div className="App">
     <Home />
     <Routes>
       <Route exact path="/login" element={ <Home />}/>
     </Routes>
    
    </div>
  );
}

export default App;
