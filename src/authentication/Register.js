import React from "react";

function Register() {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-md-4 bg-area">
          <div class="mt-5 pt-3">
            <h5 className="mt-5 pt-5">
              <u >Already Have an account?</u>
            </h5>
            <button className="btn btn-info col-3 text-white fw-bold">LOGIN</button>
          </div>
          </div>
          <div className="col-md-4 email mt-5">
            <form className="mt-5">
<label className="mt-3 d-flex justify-content-start" for="">Name</label> 
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/>
<label className="mt-3 d-flex justify-content-start" for="">Account Type</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/>
<label className="mt-3 d-flex justify-content-start" for="">Email</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/><br/>
<label className="mt-3 d-flex justify-content-start" for="">Password</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/><br/>
<label className="mt-3 d-flex justify-content-start" for="">Confirm Password</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/><br/>
<label className="mt-3 d-flex justify-content-start" for="">Facility</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/><br/>
<label className="mt-3 d-flex justify-content-start" for="">Contact</label><br/>
<input className="mt-1 border-success border-0 border-4 border-bottom col-12" type="text"/><br/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
