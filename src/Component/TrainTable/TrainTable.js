import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component"; // Import DataTable

const AddTrain = ({ editIndex }) => {
  const navigate = useNavigate();

  const [trainNumber, setTrainNumber] = useState("");
  const [trainName, setTrainName] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [startPointLocation, setStartPointLocation] = useState("");
  const [endPointLocation, setEndPointLocation] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [listedTrain, setListedTrain] = useState([]);

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("trainData")) || [];
    setListedTrain(storedData);
  }, []);

  const columns = [
    {
      name: "Train Number",
      selector: "trainNumber",
      sortable: true,
    },
    {
      name: "Train Name",
      selector: "trainName",
      sortable: true,
    },
    {
      name: "Total Seats",
      selector: "totalSeats",
      sortable: true,
    },
    {
      name: "Start Point Location",
      selector: "startPointLocation",
      sortable: true,
    },
    {
      name: "End Point Location",
      selector: "endPointLocation",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          className="btn btn-outline-danger "
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
      ),
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const dataToSave = {
      trainNumber,
      trainName,
      totalSeats,
      startPointLocation,
      endPointLocation,
    };

    const updatedTrainList = [...listedTrain, dataToSave];
    localStorage.setItem("trainData", JSON.stringify(updatedTrainList));
    setListedTrain(updatedTrainList);

    setTrainNumber("");
    setTrainName("");
    setTotalSeats("");
    setStartPointLocation("");
    setEndPointLocation("");
    setFormErrors({});
    alert("Form submitted successfully!");
  };

  const handleDelete = (row) => {
    const updatedTrainList = listedTrain.filter((item) => item !== row);
    localStorage.setItem("trainData", JSON.stringify(updatedTrainList));
    setListedTrain(updatedTrainList);
  };

  const validateForm = () => {
    const errors = {};

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

  return (
    <div style={{ fontSize: "20px" }}>
      <DataTable
        title="Train List"
        columns={columns}
        data={listedTrain}
        pagination
      />
      <button
        type="button"
        className="btn  btn-outline-danger bg-black ms-3"
        onClick={() => navigate("/AddTrain")}
      >
        Book Now
      </button>
      <button
        type="button"
        className="btn  btn-outline-danger bg-black ms-3"
        onClick={() => navigate("/Dashboard")}
      >
        Go back
      </button>
    
    </div>
  );
};

export default AddTrain;
