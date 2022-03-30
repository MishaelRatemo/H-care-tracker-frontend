import React from "react";
import "./home.css";
//import { Outlet, Link } from "react-router-dom"


function Home(){
return(
    <div>
        <nav className="navbar navbar-dark default-color justify-content-between">
                <a id="navbar-brand" href="/">H.Care Tracker</a>
                <div className="form-inline my-1">
            <div class="md-form form-sm my-0">
                <button className="btn btn-outline-white btn-sm my-0" type="submit" Link to="/login">Login</button>
                <button className="btn btn-outline-white btn-sm my-0" type="submit" Link to="/signup">Sign-up</button>
            </div>
                
            </div>
        </nav>

        <div className="Image">
            <img src="./src/Landing_page/static/images/LOGO-bg.png" alt="" />
            <p>Efficient Tracking at your Fingertips</p>
        </div>
        <div className="footer-home">
            <footer>
                <h3 a-href="/what">What We Do</h3>
                <pre></pre>
                <h3>Contact</h3>
            </footer>
        </div>

    </div>
)
}

export default Home