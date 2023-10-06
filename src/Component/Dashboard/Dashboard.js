import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  let navigate = useNavigate();
  const [trainList, setTrainList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("trainData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setTrainList(parsedData);
    }
  }, []);
  console.log(trainList);
  return (
    <div
      style={{
        paddingBottom: "25px",
        border: "2px solid",
        background: "linear-gradient(45deg, red, blue)",
      }}
    >
      <button
        type="button"
        className="btn btn-outline-success bg-black"
        style={{ marginRight: "80%" }}
      >
        TOTAL COUNT :{trainList.length}
      </button>

      <button
        type="button"
        className="btn btn-outline-success bg-black"
        style={{ marginLeft: "80%" }}
        onClick={() => navigate("/")}
      >
        LOGOUT
      </button>
      <div>
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "white",
            border: "7px solid gray",
          }}
        >
          TRAIN LIST
        </h2>

        <table
          className="table table-bordered table-danger table-striped"
          style={{ border: "px solid black" }}
        >
          <thead>
            <tr
              className="table"
              style={{ background: "linear-gradient(45deg, red, blue)" }}
            >
              <th>TRAIN NUMBER</th>
              <th>TRAIN NAME</th>
              <th>TOTAL SEATS</th>
              <th>START POINT LOCATION</th>
              <th>END POINT LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {trainList.slice(0, 5).map((train, index) => (
              <tr key={index}>
                <td>{train.trainNumber}</td>
                <td>{train.trainName}</td>
                <td>{train.totalSeats}</td>
                <td> {train.startPointLocation}</td>
                <td>{train.endPointLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Train button */}
      <button
        type="button"
        className="btn btn-outline-danger bg-black"
        style={{ width: "19%", marginLeft: "30px" }}
        onClick={() => navigate("/AddTrain")}
      >
        BOOK NOW
      </button>

      {/* List button */}
      <button
        type="button"
        className="btn btn-outline-danger  bg-black"
        style={{ width: "19%", marginLeft: "30px" }}
        onClick={() => navigate("/TrainTable")}
      >
        BOOKING LIST
      </button>
    </div>
  );
};

export default Dashboard;
