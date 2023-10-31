import React, { useState } from "react";
import LoginWindow from "./pages/login/LoginWindow";

function App() {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);

  const openLoginWindow = () => {
    setIsLoginWindowOpen(true);
  };

  const closeLoginWindow = () => {
    setIsLoginWindowOpen(false);
  };

  return (
    <div>
      <button onClick={openLoginWindow}>Login</button>

      {isLoginWindowOpen && (
        <LoginWindow onClose={closeLoginWindow}>
          <h2>Login to TweeXy</h2>
          <button>Login with Google</button>
          <button>Login with Github</button>
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </LoginWindow>
      )}
    </div>
  );
}

export default App;
