import React from 'react';
import YoutubePlayer from '../../components/YoutubePlayer';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
    const bulle1 = { videoId: "K-2m2KgosVg" };
    const bulle2 = { videoId: "KRKjxO_WiOU" };
    const bulle3 = { videoId: "hVuoWeq7yg4" };
    return (
        <div>
            <Button to={{ pathname: "/bulles/1", state: { bulle: bulle1 } }} component={Link}>Deux amours.</Button>
            <Button to={{ pathname: "/bulles/2", state: { bulle: bulle2 } }} component={Link}>Hier.</Button>
            <Button to={{ pathname: "/bulles/3", state: { bulle: bulle3 } }} component={Link}>L'eau.</Button>
        </div>
    );
}

export default Home;