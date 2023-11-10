import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
import React from "react";
const create = "Create your account";
const p3 = "Step 3 of 5";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Signup3 = ({ Data1, Data2, EditInformation, nextWindowHandler }) => {
  const dateval = months[Data2.month] + " " + Data2.day + "," + Data2.year;
  return (
    <>
      <p className="p3">{p3}</p>
      <h2 className="signup-header">{create}</h2>
      <form onSubmit={nextWindowHandler}>
        <input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={Data1.username}
          onClick={EditInformation}
          name="username"
          id="username"
          style={{ marginLeft: "100px", marginBottom: "30px" }}
        />
        <label htmlFor="username" style={{ marginBottom: "10px" }}>
          UserName
        </label>
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={Data1.usermail}
          onClick={EditInformation}
          name="usermail"
          id="usermail"
          style={{ marginLeft: "100px", marginBottom: "20px" }}
        />
        <label
          htmlFor="usermail"
          style={{ marginLeft: "20px", marginBottom: "20px" }}
        >
          Email
        </label>
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={dateval}
          onClick={EditInformation}
          id="Date"
          style={{ marginLeft: "100px", marginBottom: "19px" }}
        />
        <label htmlFor="Date" style={{ marginLeft: "20px" }}>
          Date
        </label>
        <button
          className="Button"
          onClick={nextWindowHandler}
          style={{ backgroundColor: "#1da1f2", marginTop: "230px" }}
        >
          {" "}
          Sign Up
        </button>
      </form>
    </>
  );
};
export default Signup3;
