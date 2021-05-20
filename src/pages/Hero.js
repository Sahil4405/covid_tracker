import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center hero">Our Heros</h1>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 py-2">
            <div className="box center">
              <img src="../images/hw1.jpg" alt="doctor" />
              <div className="content">
                <h2>Doctor</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 text-center">
            <div className="box center">
              <img src="../images/hw2.jpg" alt="doctor" />
              <div className="content">
                <h2>Police</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 text-center">
            <div className="box center">
              <img src="../images/sc2.jpg" alt="doctor" />
            <div className="content">
                <h2>Scientist</h2>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-4 py-2 text-center">
            <div className="box center">
              <img src="../images/sc1.jpg" alt="doctor" />
            <div className="content">
                <h2>Scientist</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 pr-sm-2 text-center">
            <div className="box center">
              <img src="../images/hw4.jpg" alt="doctor" />
            <div className="content">
                <h2>Doctor</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 text-center">
            <div className="box center">
              <img src="../images/hw3.jpg" alt="doctor" className='textcenter' />
            <div className="content">
                <h2>Police</h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-4 body">
          <div className="row">
            <div className="col-md-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                    className="active"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 text-center py-5">
                        <div className="single-box">
                          <div className="img-area">
                            <img
                              src="./images/hw1.jpg"
                              style={{ height: "163px", width: "260px" }}
                            ></img>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 text-center py-5">
                        <div className="single-box">
                          <div className="img-area">
                            <img
                              src="../images/hw2.jpg"
                              style={{ height: "163px", width: "260px" }}
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 text-center py-5">
                        <div className="single-box">
                          <div className="img-area">
                            <img
                              src="../images/hw3.jpg"
                              style={{ height: "163px", width: "360px" }}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Hero;
