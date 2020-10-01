import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import capsrouge from "../../assets/capsrouge.png"
import capsbleu from "../../assets/capsbleu.png"
import capsbleufonce from "../../assets/capsbleufonce.png"

const useStyles = makeStyles({
    root: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const Home = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("")


    const handleMouseOver = ({ title }) => {
        setTitle(title);
    }

    const BubbleButton = ({ id, picture, title }) => {
        return (
            <Button onMouseOver={() => handleMouseOver({ title })} to={{ pathname: `/bulles/${id}` }} component={Link}><img style={{ height: "15vh" }} src={picture}></img></Button>
        );
    }

    return (
        <div className={classes.root}>
            {title ? <h1>{title}</h1> : <h1>Bulles</h1>}
            <div>
                <BubbleButton id={1} picture={capsrouge} title="Deux amours." />
                <BubbleButton id={2} picture={capsbleu} title="Hier." />
                <BubbleButton id={3} picture={capsbleufonce} title="L'eau." />
            </div>
        </div>
    );
}

export default Home;