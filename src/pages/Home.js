import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Table from "./Table";
import Report from "./Report";
import Donation from "./Donation";
import Hero from "./Hero";
import Footer from "./Footer";

let confirmed;
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const api_call = await fetch("https://api.covid19india.org/data.json");
      const main_info = await api_call.json();
      // console.log(main_info);
      const lnt = main_info.cases_time_series.length;
      // console.log(lnt);
      // const confirmed = main_info.cases_time_series[lnt-2].dailyconfirmed - main_info.cases_time_series[lnt-1].dailyconfirmed;
      // confirmed = main_info.cases_time_series[lnt-1].dailyconfirmed - main_info.cases_time_series[lnt-2].dailyconfirmed;
      // console.log(confirmed);
      setData(main_info.cases_time_series[lnt - 1]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      {/* <h1>Hello WOrld</h1> */}
      {/* <p> {data.dailyconfirmed} </p> */}

      <div className="container my-4 ">
        <div className="row">
          <div className="col-lg-3 col-md-6 pt-2">
            <div className="card text-center case">
              <div className="card-body">
                <div className="card-title">
                  {" "}
                  <h3> New Cases </h3>{" "}
                </div>
                <div className="card-text pt-2">
                  {" "}
                  <h5>{data.dailyconfirmed} </h5>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
            <div className="card text-center recov">
              <div className="card-body">
                <div className="card-title">
                  {" "}
                  <h3>New Recovered </h3>
                </div>
                <div className="card-text pt-2">
                  {" "}
                  <h5> {data.dailyrecovered} </h5>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-2 ">
            <div className="card text-center confirm">
              <div className="card-body">
                <div className="card-title">
                  {" "}
                  <h3>Total Confirmed </h3>
                </div>
                <div className="card-text pt-2">
                  {" "}
                  <h5>{data.totalconfirmed} </h5>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
            <div className="card text-center dec">
              <div className="card-body">
                <div className="card-title">
                  {" "}
                  <h3>Deceased </h3>
                </div>
                <div className="card-text pt-2">
                  {" "}
                  <h5>{data.dailydeceased} </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Report />
      <Table />
      <Donation/>
      <Hero/>
      <Footer/>
    </>
  );
};

export default Covid;
