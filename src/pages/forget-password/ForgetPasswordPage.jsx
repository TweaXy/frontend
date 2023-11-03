import React, { useState } from "react";
import "./ForgetPasswordPage.css";

const ForgetPasswordPage = ({ onClose }) => {
  const [userInput, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted: ${userInput}");
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Find your X account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter the email, phone number or username associated with your
            account to change your password.
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address, phone number or username"
            className="custom-input"
          />
          <button type="submit">next</button>
          <button className="close-button" onClick={onClose}>
            {" "}
            x{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
