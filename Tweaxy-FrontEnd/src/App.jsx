import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
function App() {


  return (
    <>

      <div className="app">
      {/**Side bar */}
      <Sidebar/>
      {/**News feed */}

      <Feed/>
     
      {/**Widgets */}

      <Widget/>
      </div>
    </>
  )
}
 
export default App
