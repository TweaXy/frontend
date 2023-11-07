import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileBio from "./ProfileBio";
function App() {
  return (
    <>
      <div className="app">
        {/**Side bar */}
        <Sidebar />
        {/**News feed */}

        {/*<Feed />*/}
        <div className="profile">
          <ProfileHeader />

          {/**Widgets */}

          <ProfileBio />
        </div>
        <Widget />
      </div>
    </>
  );
}

export default App;
