import { useState } from 'react'
import './HomePage.css'
import Sidebar from '../../components/homePage_components/Sidebar'
import Profile from '../../components/userProfile_components/Profile'
import Widget from '../../components/homePage_components/Widget'
function ProfilePage() {


  return (
    <>

      <div className="home-page">
      {/**Side bar */}
      <Sidebar/>
      {/**News feed */}
      
      <Profile />
     
      {/**Widgets */}

      <Widget/>
      </div>
    </>
  )
}
 
export default ProfilePage;
