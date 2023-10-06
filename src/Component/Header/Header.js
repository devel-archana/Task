import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-primary bg-blue">
        <div
          className="container-fluid"
          style={{ background: "linear-gradient(45deg, red, blue)" }}
          // style={{background:"black"}}
        >
          <img src={require("../Home/download.jpeg")} alt="" />
          <h1
            className=" navbar-brand"
            style={{ fontSize: "50px", color: "black", fontWeight: "bold" }}
          >
            INDIAN RAILWAY
          </h1>

          <button
            type="button"
            className="btn btn-outline-danger bg-black"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-outline-danger bg-black"
            style={{ marginRight: "300px" }}
            onClick={() => navigate("/Login")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
