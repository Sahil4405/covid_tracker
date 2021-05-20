import React from 'react';
import './donation.css';

function Donation() {
    return (
        <>
           <div className="container donation-body mb-4">
               <div className="row my-2 text-center">
                   <h1 className="my-3"> <span style={{color:'#FF9933'}}>In</span>di<font style={{color:'#138808'}}>a</font> need our<span className='help'>Help </span> </h1>
               </div>
               <div className="row w-100 px-5">
                <p className="para">
                    We all know this is very crusial time for all of us. And also this is the sitution where we can help others.
                    Many organisations are working for the covid positive people and allowing us to help them by donating small amount
                    of money. <br /> <br/>
                    Here are some of the links: <br />
                    <ul>
                        <li><a href="https://iskcondwarka.org/food-for-covid-patients/index.php?gclid=Cj0KCQjw7pKFBhDUARIsAFUoMDYCZp-zlH0Gdd8wH8bEK7R2JkhdGk3-OiWHjV3gV_AIILVPZ-RFEmwaAkdLEALw_wcB"> ISKCON Dwarka </a>  </li>
                        <li><a href="https://www.pmcares.gov.in/en/">PM Care Fund</a></li>
                        <li><a href="https://www.feedingindia.org/donate/help-save-my-india">Zomato Feeding India</a></li>
                        <li><a href="https://www.ketto.org/fundraiser/mission-oxygen-helping-hospitals-to-save-lives">Ketto Org.</a> </li>
                        <li>Some more are <a href="https://cdn.s3waas.gov.in/s305049e90fa4f5039a8cadc6acbb4b2cc/uploads/2020/03/2020032732.pdf">Click Here</a></li>
                    </ul>
                </p>
               </div>
           </div>
        </>
    )
}

export default Donation;
