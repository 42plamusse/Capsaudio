import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId }) => {
    const opts = {
        height: '290',
        width: '290',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            color: "white",
            controls: 0,
            modestbranding: 1,
            fs: 0,
            rel: 0
        },
    };

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;

}

export default YoutubePlayer;