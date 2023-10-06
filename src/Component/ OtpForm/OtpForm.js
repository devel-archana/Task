import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OtpForm = () => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(
    localStorage.getItem("isVerified") === "true"
  );
  const [error, setError] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError(""); // Clear any previous error message
  };

  const handleVerifyOtp = () => {
    if (/^\d{4}$/.test(otp)) {
      // Validate that OTP is exactly 6 digits
      if (otp === "5555") {
        setIsVerified(true);
        localStorage.setItem("isVerified", "true");
        Swal.fire("Success", "OTP Verified Successfully!", "success").then(
          () => {
            navigate("/Dashboard"); // Navigate to the dashboard
          }
        );
      } else {
        setIsVerified(false);
        localStorage.removeItem("isVerified");
        setError("Invalid OTP. Please try again.");
        Swal.fire("Error", "Invalid OTP. Please try again.", "error");
      }
    } else {
      setError("OTP must be exactly 6 digits long.");
    }
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem("isVerified");
    };
  }, []);

  return (
    <div
      className="card"
      style={{
        padding: "100px",
        background: "linear-gradient(45deg, red, blue)",
        color: "black",
      }}
    >
      <h1>OTP Verification</h1>
      {!isVerified ? (
        <div>
          <p>Enter the OTP sent to your phone:</p>
          <input
            className="sub"
            type="text"
            autoFocus="on"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
          />
          <br />
          <br />
          <button
            className="btn btn-outline-danger  bg-black"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <p>OTP Verified Successfully!</p>
      )}
    </div>
  );
};

export default OtpForm;
