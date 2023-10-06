import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ display: "flex", background: "black" }}>
          <div className="col-6">
            <img
              src={require("./taj-mahal-hotel_78361-4512.avif")}
              alt=""
              style={{ width: "580px", height: "550px" }}
            />
          </div>
          <div
            className="col-lg-6"
            style={{
              color: "white",
              paddingRight: "15px",
            }}
          >
            <h1>IRCTC WELCOME</h1>
            <p style={{ color: "white" }}>
              <h6 style={{ color: "green", fontWeight: "bold" }}>
                INDIAN RAILWAYS CATERING AND TOURISM COOPERATION.
              </h6>
              The Ministry of Railways created the Indian Railway Catering and
              Tourism Corporation (IRCTC) to oversee operations for Indian
              Railway catering, online ticketing, and tourism.
            </p>

            <img
              src={require("./train-railway-station_1161-203.avif")}
              alt=""
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
