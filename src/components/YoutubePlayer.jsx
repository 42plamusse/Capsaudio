import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        height: props => props.isMobile ? 158 : 450,
    }
})

const YoutubePlayer = ({ videoId }) => {
    const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true })
    const classes = useStyles({ isMobile });
    const opts = {
        height: isMobile ? '158' : "450",
        width: isMobile ? '280' : "800",
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
        // <div style={{ height: isMobile ? '300' : "470", padding: "16px 0px 16px 0px" }}>
        <div className={classes.root}>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        </div>
    );

}

export default YoutubePlayer;