import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Photogallery from "./components/Photogallery"; 

class App extends Component{


  render(){
    return(
      <div id="gallery">
      <Header/>
      <Photogallery />
      </div>
    )

  }
}

export default App; 