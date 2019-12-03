import React, { Component } from 'react';
import logo from './Img/Joker.png'

class Header extends Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <div className="media-header">
                <img src={logo} alt={"logo"} className="logo"/> 
                <h1>Flickr Gallery - photomodesami</h1>
                <p>pictures from the games I enjoy playing. Click the image to view it full size</p>
                </div>
        )
    }
}
export default Header; 