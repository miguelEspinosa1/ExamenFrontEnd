
import React, { Component } from 'react'

import historia from "./components/data.json"
import "./index.css"
import GeneradorDeHistoria from './components/Historiador';

export default class App extends Component {
render(){


  return (
    <div>
    
      <GeneradorDeHistoria historia={historia} id={1} letra="" />  
  
      
    </div>
  )
  
  }
}


