import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
class App extends Component {
  constructor(props){
    super(props);
    this.videoNode = React.createRef();
    this.buttonNode = React.createRef();    
  }
  playPause(){
    console.log(this.videoNode);
    this.buttonNode.current.innerHTML = 'Pause'; 
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <div className="App">
        <YouTube
        videoId="FB97kk5-zGc"
        opts={opts}
        onReady={this._onReady}
        />
        <div>
          <button ref={this.buttonNode} onClick = {this.playPause.bind(this)}>Play</button>
          <input type="range" min="0" max="100" value="0" step="1" /> 
        </div>
      </div>

    );
  }
}

export default App;
