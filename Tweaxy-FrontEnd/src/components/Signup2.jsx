import { useState, useEffect } from "react";
import "./ComponentsStyles/FloatingWindow.css";
import "./ComponentsStyles/Signup1.css";
const Customize = "Customize your experience";
const Track = "Track where you see Tweaxy content across the web";
const p1 =
  "Tweaxy uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.";
const p2 = "Step 2 of 5";
const SignUp2 = ({ nextWindowHandler }) => {
  const [ischecked, setischecked] = useState(false);
  const CheckboxHandler = () => {
    setischecked(!ischecked);
  };
  return (
    <>
      <div className="signup2">
        <p className="p3">{p2}</p>
        <h2 className="Customize">{Customize}</h2>
        <p className="Track">{Track}</p>
        <p className="DataPersonalization">{p1}</p>
        <input
          className="checkBox"
          type="checkbox"
          checked={ischecked}
          onChange={CheckboxHandler}
        />
        <button
          className="Button"
          onClick={nextWindowHandler}
          style={{ backgroundColor: "black", marginTop: "270px" }}
        >
          {" "}
          Next
        </button>
      </div>
    </>
  );
};
export default SignUp2;
