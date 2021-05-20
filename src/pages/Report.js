import React, {useEffect} from "react";
import './report.css';
import 'bootstrap/js/dist/carousel';
// import img1 from './images/mg1.jpg';

function Report() {
  return (
    <>
    <h2 className="text-center prec">Precaution</h2>
      <div className="container my-4 body">
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
                    <div className="col-lg-4 text-center py-5">
                      <div className="single-box">
                        <div className="img-area">
                          <img src="./images/mg1.jpg"></img>
                          {/* <img src={img1} /> */}
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-4 text-center py-5">
                      <div className="single-box">
                        <div className="img-area">
                          <img src="../images/mg4.jpg" style={{height:"163px",width:"260px"}}></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center py-5">
                      <div className="single-box">
                        <div className="img-area">
                          <img src="../images/mg4.png" style={{height:"163px",width:"360px"}}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
