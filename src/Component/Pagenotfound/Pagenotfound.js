import React from "react";

const Pagenotfound = () => {
  return (
    <div
      style={{
        padding: "100px",
        background: "linear-gradient(45deg, red, blue)",
        color: "white",
      }}
    >
      <img src={require("../Home/404.jpeg")} alt="" />
    </div>
  );
};

export default Pagenotfound;
