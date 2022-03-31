import React from "react";

function Register() {
  return (
    <div>
      <div className=" ">
        <div className="row">
          <div className="col-md-4 bg-area container-fluid">
              <div class="mt-5 pt-3 ">
                <h5 className="mt-5 pt-5">
                  <u >Already Have an account?</u>
                </h5>
                <button className="btn btn-info col-3 text-white fw-bold">LOGIN</button>
              </div>
          </div>
          <div className="col-md-4 email mt-5">
            <form className="mt-5">
                <label className=" d-flex justify-content-start" for="">Name</label> 
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Account Type</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Email</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Password</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Confirm Password</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Facility</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <label className=" d-flex justify-content-start" for="">Contact</label>
                <input className=" form-control border-success border-0 border-4 border-bottom " type="text"/>
                <input type='submit' value='Sign Up' className='btn btn-info col-6 ms-5 mt-5 ' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
