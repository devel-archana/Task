import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTrain = ({ editIndex }) => {
  const navigate = useNavigate();

  // Load the form data from localStorage on component mount

  const [trainNumber, setTrainNumber] = useState("");
  const [trainName, setTrainName] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [startPointLocation, setStartPointLocation] = useState("");
  const [endPointLocation, setEndPointLocation] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const listedTrain = JSON.parse(localStorage.getItem("trainData")) || [];

  const validateForm = () => {
    const errors = {};

    // Add your validation logic here
    if (!trainNumber) {
      errors.trainNumber = "Train Number is required";
    }

    if (!trainName) {
      errors.trainName = "Train Name is required";
    }

    if (!totalSeats) {
      errors.totalSeats = "Total Seats is required";
    }

    if (!startPointLocation) {
      errors.startPointLocation = "Start Point Location is required";
    }

    if (!endPointLocation) {
      errors.endPointLocation = "End Point Location is required";
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    {
      // Form is valid, submit the data or perform other actions
      console.log(
        "Form submitted:",
        trainNumber,
        trainName,
        totalSeats,
        startPointLocation,
        endPointLocation
      );
      const dataToSave = {
        trainNumber,
        trainName,
        totalSeats,
        startPointLocation,
        endPointLocation,
        // other properties
      };

      console.log(listedTrain);
      listedTrain.push(dataToSave);
      // Save the form data to localStorage
      console.log(listedTrain);
      localStorage.setItem("trainData", JSON.stringify(listedTrain));
    }
    setTrainNumber("");
    setTrainName("");
    setTotalSeats("");
    setStartPointLocation("");
    setEndPointLocation("");
    setFormErrors({});

    // Display an alert or navigate to another page as needed
    alert("Form submitted successfully!");
  };

  return (
    <div
      className="card"
      style={{ background: "linear-gradient(45deg, red, blue)" }}
    >
      <div
        className="card"
        style={{
          textAlign: "center",

          background: "linear-gradient(45deg, red, blue)",

          color: "black",
        }}
      >
        <h2 style={{ color: "WHITE", border: "7px dotted gray" }}>
          BOOKING TICKET
        </h2>

        <form onSubmit={handleFormSubmit} style={{ fontWeight: "bold" }}>
          <div>
            <label htmlFor="trainNumber" className="form-label">
              TRAIN NUMBER :
            </label>
            <br></br>
            <input
              style={{ paddingLeft: "50px" }}
              type="number"
              className={formErrors.trainNumber ? "is-invalid" : ""}
              id="trainNumber"
              placeholder="train number"
              autoFocus="ON"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
            />
            {formErrors.trainNumber && (
              <div className="invalid-feedback" style={{ color: "yellow" }}>
                {formErrors.trainNumber}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="trainName" className="form-label">
              TRAIN NAME :
            </label>{" "}
            <br></br>
            <input
              style={{ paddingLeft: "50px" }}
              type="text"
              className={formErrors.trainName ? "is-invalid" : ""}
              id="trainName"
              placeholder="train name"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
            />
            {formErrors.trainName && (
              <div className="invalid-feedback" style={{ color: "yellow" }}>
                {formErrors.trainName}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="totalSeats" className="form-label">
              TOTAL SEATS :
            </label>
            <br></br>
            <input
              style={{ paddingLeft: "50px" }}
              type="number"
              className={formErrors.totalSeats ? "is-invalid" : ""}
              id="totalSeats"
              placeholder="total seats"
              value={totalSeats}
              onChange={(e) => setTotalSeats(e.target.value)}
            />
            {formErrors.totalSeats && (
              <div className="invalid-feedback" style={{ color: "yellow" }}>
                {formErrors.totalSeats}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="startPointLocation" className="form-label">
              START POINT LOCATION :
            </label>
            <br></br>
            <input
              style={{ paddingLeft: "50px" }}
              type="text"
              className={formErrors.startPointLocation ? "is-invalid" : ""}
              id="startPointLocation"
              placeholder="start point location"
              value={startPointLocation}
              onChange={(e) => setStartPointLocation(e.target.value)}
            />
            {formErrors.startPointLocation && (
              <div className="invalid-feedback" style={{ color: "yellow" }}>
                {formErrors.startPointLocation}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="endPointLocation" className="form-label">
              END POINT LOCATION :
            </label>
            <br></br>
            <input
              style={{ paddingLeft: "50px" }}
              type="text"
              placeholder="end point location"
              className={formErrors.endPointLocation ? "is-invalid" : ""}
              id="endPointLocation"
              value={endPointLocation}
              onChange={(e) => setEndPointLocation(e.target.value)}
            />
            {formErrors.endPointLocation && (
              <div className="invalid-feedback" style={{ color: "yellow" }}>
                {formErrors.endPointLocation}
              </div>
            )}
          </div>{" "}
          <br></br>
          <button type="submit" className="btn btn-outline-danger bg-black">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger bg-black ms-3"
            onClick={() => navigate("/Dashboard")}
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrain;
