import React from 'react';
import { useParams } from 'react-router-dom';
import YoutubePlayer from '../../components/YoutubePlayer';
import { makeStyles, useMediaQuery, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    close: {
        padding: 16,
        alignSelf: 'flex-start'
    }
})

const Bulle = ({ bulle, handleBulleNav }) => {
    const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true })
    const classes = useStyles();
    if (!bulle) return (<h1>*POP* fit la bulle.</h1>)
    const { videoId, text, title } = bulle;
    return (
        <div className={classes.root}>
            <IconButton onClick={() => { handleBulleNav(null) }} className={classes.close}>
                <CloseIcon />
            </IconButton>
            <YoutubePlayer videoId={videoId} />
            <h2 >{title}</h2>
            <div style={{ maxWidth: isMobile ? 280 : 800, paddingBottom: 16, textAlign: "left" }}>
                {text.split("\n").map((line, key) => {
                    return <p key={key} style={{ fontWeight: 300, color: "grey" }}>{line}</p>
                })}
            </div>
        </div>
    );
}

export default Bulle;