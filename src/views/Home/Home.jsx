import React from 'react';
import { makeStyles, Paper, IconButton } from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import capsaudio_affiche from "../../assets/capsaudio_affiche.jpg"

const useStyle = makeStyles({
    root: {
        flex: 1,
        // backgroundColor: "rgba(0,0,0,.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${capsaudio_affiche})`,
        backgroundSize: 300,
    },
    mainInfo: {
        textAlign: "center",
        padding: 16,
        margin: 16
    },
    icons: {
        "& *": {
            // margin: 8
        }
    }
})

const Home = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>

            <Paper className={classes.mainInfo}>
                <h3>👨‍💻 Site en construction 👩‍💻</h3>
            </Paper>
            <Paper className={classes.mainInfo}>
                <h1>Retrouvez nous sur les réseaux:</h1>
                <div className={classes.icons}>
                    <IconButton iconStyle onClick={() => { window.location.href = "https://www.instagram.com/capsaudio/" }}>
                        <InstagramIcon style={{ color: "orange", fontSize: "2em" }} />
                    </IconButton>
                    <IconButton onClick={() => { window.location.href = "https://www.facebook.com/caps.audio" }}>
                        <FacebookIcon style={{ color: "blue", fontSize: "2em" }} />
                    </IconButton>
                </div>

            </Paper>
        </div>
    );
}

export default Home;