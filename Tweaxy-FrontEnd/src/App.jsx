import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widget from './Components/Widget'
function App() {


  return (
    <>

      <div className="app">
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
 
export default App
