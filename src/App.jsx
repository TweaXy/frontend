import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <div className="app">
        {/**Side bar */}
        <Sidebar />
        {/**News feed */}

        {/*<Feed />*/}
        <Profile />
        <Widget />
      </div>
    </>
  );
}

export default App;
