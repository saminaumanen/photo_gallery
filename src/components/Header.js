import React, { Component } from 'react';

class Header extends Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <div className="media-header">
                <h1 className="media-gallery__title">Flickr Gallery - photomodesami</h1>
                <p>pictures from the games I enjoy playing. Click the image to view it full size</p>
                </div>
        )
    }
}
export default Header; 