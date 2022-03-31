import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "./static/images/LOGO-bg.png";




function Navbar(props){
return(
    <div className='bdy'>
        <div className="home container-fluid " >
            <nav className="navbar bg-info navbar-dark default-color justify-content-between">
                    <a id="navbar-brand" href="/">
                        <img className="img-fluid" src={ logo } height='100px' width='100px' alt="" />

                    </a>
                    <div className="form-inline my-1">
                <div className="md-form form-sm my-0">
                    <Link to="/login"><button className="btn fs-3 text-white fw-bolder" type="submit" Link to="/login">Login</button></Link>
                    <Link to="/register"><button className="btn fs-3 text-white fw-bolder" type="signup">Sign-up</button></Link>
                </div>                    
                </div>
            </nav>   
        </div>       
    </div>
)
}

export default Navbar;