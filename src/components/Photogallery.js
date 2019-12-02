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
          .get(' https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=87bc095b52c08a2a8aa3ce92e3e6fd70&user_id=183431130%40N03&format=json&nojsoncallback=1')
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