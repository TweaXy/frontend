import { useState } from 'react'
import './HomePage.css'
import Sidebar from '../../components/homePage_components/Sidebar'
import Feed from '../../components/homePage_components/Feed'
import Widget from '../../components/homePage_components/Widget'
function HomePage() {


  return (
    <>

      <div className="home-page">
      {/**Side bar */}
      <Sidebar/>
      {/**News feed */}
      
      <Feed />
     
      {/**Widgets */}

      <Widget/>
      </div>
    </>
  )
}
 
export default HomePage;
