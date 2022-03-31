import React from "react";

import { Link } from "react-router-dom";
import image from "./static/images/image.png";


function Login() {
  return (
    <div className="bdy">
      <div className="">
        <div className="d-flex justify-content-around">
            <div className="card bg-dark text-white">
            <img src={ image} className="card-img" alt="..." />
            <div className="card-img-overlay position-absolute">
              <h5 className="card-title">Card title</h5>
              <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          
        
          
          {/* <div className="col-md-4 email mt-5">
            <form className="mt-5">
              <input
                className="mt-5 mb-5 input border-success border-0 border-4 border-bottom"
                type="text"
                placeholder="Email Address"
              />
              <br />
              <input
                className="mt-5 input border-success border-0 border-4 border-bottom"
                type="text"
                placeholder="Password"
              />
              <br />
              <input
                className="mt-5"
                type="checkbox"
                name="Remeber"
                id="Remeber"
              />
              <label className="mt-5 ms-1" for="Remember">
                Remember
              </label>
              <a className="ms-3 text-dark" href="//">
                {" "}
                Forgot Password?
              </a>
              <br />
              <button
                className="btn btn-lg btn-info px-5 mt-5 text-white col-6"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div> */}

        </div>
      </div>
    </div>
  );
}
export default Login;
