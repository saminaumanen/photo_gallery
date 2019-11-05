import React, { Component } from 'react';
import axios from 'axios'

class Photogallery extends Component{

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        selectedImage: ''
    }
}

//fetch public photos from user 
//https://www.flickr.com/services/api/explore/flickr.people.getPublicPhotos
componentDidMount() {
  var picturefeed = this;
  this.serverRequest =
      axios
          .get('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=08a1a1fb2786ca00e3801c9048e262e9&user_id=183431130%40N03&format=json&nojsoncallback=1&auth_token=72157711654648667-71434facb5881da3&api_sig=3179193bc53c9bb359c1baea295e2eea')
          .then(function(result) {
            picturefeed.setState({
                  items: result.data.photos.photo,
                  selectedImage: picturefeed.imageURL(result.data.photos.photo[0])
              })
          })
}

imageURL(item) {
  return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.png' 
}

selectImage(selectedImage) {
  this.setState({
      selectedImage
  })
}

  render(){
    const {items, images, selectedImage} = this.state;
    return(
      <div className="media-gallery">
                <h1 className="media-gallery__title">Flickr Gallery - photomodesami</h1>
                <p>pictures from the games I enjoy playing. Click the image to view it full size</p><br/>
                <div className="media-gallery-thumbnails">
                    {this.state.items.length ?
                        this.state.items.map((item, index) =>
                            <div key={index} onClick={this.selectImage.bind(this,this.imageURL(item))}>
                                <img className="media-gallery-thumbnails__img" src={this.imageURL(item)}/>
                            </div>)
                        : <div>Loading...</div>
                    }
                </div>
                <div className="media-gallery-main">
                    <div>
                        <img className="media-gallery-main__img" src={selectedImage} />
                    </div>
                </div>
            </div>
    )
  }

}

export default Photogallery; 