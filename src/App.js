import React, { Component } from 'react';
import './App.css';
import Photogallery from "./components/Photogallery"; 

class App extends Component{


  render(){
    return(
      <div id="gallery">
      <Photogallery />
      </div>
    )

  }
}

export default App; 