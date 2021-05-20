import React from "react";
// import { Router, Switch } from 'react-router';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

// import Console from './console';
// import Covid from './components/mainPage';
// let ans = 0;
// let lengt =0;
// const getData = async() => {
//   const api_call = await fetch('https://api.covid19india.org/data.json');
//   const response = await api_call.json();
//   lengt = response.cases_time_series.length;

//   ans = response.cases_time_series[lengt-1].dailyconfirmed;

//   // console.log(response.cases_time_series[length-1].dailyconfirmed);
// }

// const [num,setNum] = useState({
//   case: 0,
//   death: 0,
// });

function App() {
  return (
    <>
      {/* <Covid/> */}
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
