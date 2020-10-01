import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
    };

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;

}

export default YoutubePlayer;