import React from 'react';
import { makeStyles } from "@material-ui/core"
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
    root: {
        paddingBottom: 16,
        paddingTop: 16,
        height: "45vw",
        width: "80vw",
        maxWidth: 800,
        maxHeight: 450,
    }
})

const YoutubePlayer = ({ videoId }) => {
    const classes = useStyles();
    return (
        // <div style={{ height: isMobile ? '300' : "470", padding: "16px 0px 16px 0px" }}>
        <div className={classes.root}>
            <ReactPlayer
                className='react-player'
                url={`https://youtu.be/${videoId}`}
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            color: "white",
                            controls: 0,
                            modestbranding: 1,
                            fs: 0,
                            rel: 0,
                            playsinline: 1,
                            origin: "http://localhost:3000"
                        },
                    }
                }}
            />
            {/* <YouTube videoId={videoId} opts={opts} onReady={_onReady} /> */}
        </div>
    );

}

export default YoutubePlayer;