import React, { Component } from 'react';

import YouTube from 'react-youtube';

class Player extends Component {
  render() {
    const opts = {
      height: '450',
      width: '100%'
    };
    const { videoId } = this.props;
    return <YouTube videoId={videoId} opts={opts} />;
  }
}

export default Player;
