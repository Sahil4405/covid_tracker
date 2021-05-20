import React, {useState,useEffect} from 'react';
import "./table.css";

const Table = (props) => {
    const [data,setData] = useState([]);

    const getCovidData = async() =>{
        try{
            const api_call = await fetch("https://api.covid19india.org/data.json");
            const main_info = await api_call.json();
            console.log(main_info.statewise);
            setData(main_info.statewise);
        }catch(error)
        {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
          <div className="container-fluid mt-5 mb-5">
              <div className="main-heading">
                  <h1 className="mb-5 text-center"> <span className="font-weight-bold">India</span> StateWise Data </h1>
              </div>
              <div className="table-responsive">
                  <div className="table table-hover">
                      <thead className="table-dark thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Active</th>
                            <th>death</th>
                            <th>update</th>
                        </tr>
                      </thead>
                      <tbody>

                      {
                          data.map((curElem,ind)=>{
                              return(
                                <tr key={ind}>
                                   <th>{curElem.state}</th>
                                   <td>{curElem.confirmed}</td>
                                   <td>{curElem.recovered}</td>
                                   <td>{curElem.active}</td>
                                   <td>{curElem.deaths}</td>
                                   <td>{curElem.lastupdatedtime}</td>
                                </tr>
                              )
                          })
                      }
                      </tbody>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Table
