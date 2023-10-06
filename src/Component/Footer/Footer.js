import React from "react";

const Footer = () => {
  return (
    <>
      <div className="card">
        <div className="row">
          <p
            style={{
              textAlign: "center",
              background: "linear-gradient(45deg, red, blue)",
              // background:"black",
              padding: "15px",
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
            }}
          >
            &copy; 2023 react All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
