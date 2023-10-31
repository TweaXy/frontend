import React from "react";
import "./LoginWindow.css";

const LoginWindow = ({ children, onClose }) => {
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="login-window">
        <div className="login-window-header">
          <button className="login-window-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="login-window-content">{children}</div>
      </div>
    </div>
  );
};

export default LoginWindow;
