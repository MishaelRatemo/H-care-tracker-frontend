import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "./static/images/LOGO-bg.png"



function Home(){
return(
    <div>
        <nav className="navbar navbar-dark default-color justify-content-between">
                <a id="navbar-brand" href="/">H.Care Tracker</a>
                <div className="form-inline my-1">
            <div class="md-form form-sm my-0">
                <Link to="/login"><button className="btn btn-outline-white display-4" type="submit" Link to="/login">Login</button></Link>
                <Link to="/signup"><button className="btn   " type="signup" Link to="/contact">Sign-up</button></Link>
            </div>
                
            </div>
        </nav>

        <div >
            <img className="img-fluid" src={ logo } alt="" />
            <p>Efficient Tracking at your Fingertips</p>
        </div>
        <div className="footer-home">
            <footer>
                <Link to="/whatwedo"><h3 className="btn btn-success text-dark" Link to="/what">What We Do</h3></Link>
                <pre></pre>
                <Link to="/contact"><h3 className="btn btn-success text-dark" Link to="/Contact">Contact</h3></Link>
            </footer>
        </div>

    </div>
)
}

export default Home