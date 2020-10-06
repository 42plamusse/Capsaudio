import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from "@material-ui/core"

const YoutubePlayer = ({ videoId }) => {
    const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true })
    const opts = {
        height: isMobile ? '158' : "400",
        width: isMobile ? '280' : "711",
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
    return (
        <div style={{ height: isMobile ? '280' : "400", padding: "16px 0px 16px 0px" }}>

            <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        </div>
    );

}

export default YoutubePlayer;