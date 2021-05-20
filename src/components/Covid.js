import React, {useEffect, useState} from 'react';

const Covid = () => {
    const [data,setData] = useState([]);

    const getCovidData = async() =>{
        try{
            const api_call = await fetch("https://api.covid19india.org/data.json");
            const main_info = await api_call.json();
            console.log(main_info);
            const lnt =  main_info.cases_time_series.length;
            console.log(lnt);
            setData(main_info.cases_time_series[lnt - 1]);
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
        <h1>Hello WOrld</h1>
        <p> {data.dailyconfirmed} </p>
        </>
    )
};

export default Covid;