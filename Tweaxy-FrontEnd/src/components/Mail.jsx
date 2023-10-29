import React from "react";
import { NavLink } from "react-router-dom";



const Mail = () => {
  return (
    <>

      <div>
        <p>Create your account</p>

        <input type="text"  placeholder="Name" />

        <input
          type="text"
          
          placeholder="Email address"
        />

        <div  style={{ fontWeight: "bold" }}>
          Date of birth{" "}
        </div>
        <div >
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </div>
       
      </div>
    </>
  );
};

export default Mail;
