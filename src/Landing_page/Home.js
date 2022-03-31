import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "./static/images/LOGO-bg.png";
import home from "./static/images/hcare.png";
import hcare1 from "./static/images/hcare1.png";
import hcare2 from "./static/images/hcare2.png";
import hcare3 from "./static/images/hcare3.png";





function Home(){
return(
    <div className='bdy'>
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ hcare1 } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-danger fs-2 fw-bolder'>First slide label</h5>
                            <p >Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ hcare2 } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-danger fs-2 fw-bolder'>Second slide label</h5>
                            <p >Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src={ hcare3 } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-danger fs-2 fw-bolder'>Third slide label</h5>
                            <p >Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    </div>
)
}

export default Home