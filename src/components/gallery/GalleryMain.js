import React from 'react';
import SubHeader from '../SubHeader';
import ClearFix from '../ClearFix';

const $ = window.$;

class Album {
  constructor(album_info, photos) {
    this.info = album_info;
    this.photos = photos;
  }
}

class AlbumItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <div>
          {this.props.photos.map(function(photo){
            return (
              <img src={photo.thumbnail_url} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    }
    this.fetchAlbums = this.fetchAlbums.bind(this);
    this.fetchAlbums();
  }

  fetchAlbums() {
    $.get("http://default-environment.tdtddkdkmp.us-west-2.elasticbeanstalk.com/api/api/album/public_albums", function(response, status){
      // this.updateSermons(response.data.sermons);
      if(response.length > 0) {
        var result = [];
        for(var i = 0; i < response.length; i++) {
          var albumItem = response[i];
          result.push(new Album(albumItem["album"], albumItem.photos));
        }
        this.setState({collections: result});
      } else {
        console.log("Unable to find any albums");
      }
    }.bind(this));
  }

  render() {
    return (
        <div>
          <SubHeader title="Gallery" />
          <ClearFix />
          <div className="container">
            {this.state.collections.map(function(collection){
              return (
                <AlbumItem info={collection.info} photos={collection.photos} />
              )
            })}
          </div>
        </div>
    );
  }
}
