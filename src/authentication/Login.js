import React from "react";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login-page ">
        <div className="row">
          <div className="col-md-4 bg-area mt-5 pt-5">
            <h1 className="ms-5 mt-5 ps-5 display-3 text-primary">WELCOME</h1>
            <h6>Sign in to your account.</h6>

            <h5 className="mt-5">
              <u>Have no account?</u>
            </h5>
            <Link to="/register"><button className="btn btn-info"> SIGN UP</button></Link>
          </div>
          <div className="col-md-4 email mt-5">
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
                className="btn btn-lg btn-primary px-5 mt-5 text-white col-6"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
