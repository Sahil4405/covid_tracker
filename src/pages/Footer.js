import React from "react";

function Footer() {
  return (
    <>
      {/* <h1>Hello WOrld!!</h1> */}
      <div className="container-fluid" style={{ width: "100%" }}>
        <div className="row">
          <div className="col">
            <div
              className="mt-5 text-center my-auto"
              style={{
                background: "rgb(29, 28, 28)",
                color: "white",
                height: "30px",
                fontSize: '1.5vw',
              }}
            >
            Copywrite &copy;2021 <font style={{ color: "red" }}>COVID</font> All Rights Reserved. Powered BY{" "}
              <font style={{ color: "crimson" }}>SAHIL</font> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
