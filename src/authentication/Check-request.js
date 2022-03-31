import React from "react";
import logoo from "./static/images/logoo.png"

function Check(){
  return(
    <div>

    <div className="check">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4 ">
          <h5 className="text-white h4"><a className="text-white" href="/"> Home</a></h5>
          <h5 className="text-white h4"><a className="text-white" href="/"> Check Request</a></h5>
          <h5 className="text-white h4" ><a className="text-white" href="/">Make Request</a></h5>
          <span className="text-muted">We are Happy to have you here.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
        <img className="img-fluid" src={logoo} alt=""/>
          
          <button className="navbar-toggler btn-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
      <hr className="bg-dark ms-5" width="90%"/>
      <h2 className="text-primary py-5">CHECK REQUEST</h2>
      <div className="titles d-flex justify-content-around ">
        <h5 className="border-dark border-0 border-2 border-end pe-5 ">Donor</h5>
        <h5 className="border-dark border-0 border-2 border-end pe-5">Equipment</h5>
        <h5 className="border-dark border-0 border-2 border-end pe-5">Status</h5>
        <h5 className="border-dark border-0 border-2 border-end pe-5">Time-Frame</h5>
        <h5 className="border-dark border-0 border-2 border-end pe-5">Live-Stock</h5>
      </div>
      <hr/>
    </div>
    </div>
  )
}
export default Check