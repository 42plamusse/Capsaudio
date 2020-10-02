import React from 'react';
import { useParams } from 'react-router-dom';
import YoutubePlayer from '../../components/YoutubePlayer';


const Bulle = ({ bulle }) => {
    if (!bulle) return (<h1>*POP* fit la bulle.</h1>)
    const { videoId, text, title } = bulle;
    return (
        <div>
            <h2>{title}</h2>
            <div style={{ height: 280, padding: "16px 0px 16px 0px" }}>
                <YoutubePlayer videoId={videoId} />
            </div>
            <div style={{ paddingBottom: 16 }}>
                {text.split("\n").map((line, key) => {
                    return <p key={key}>{line}</p>
                })}
            </div>
        </div>
    );
}

export default Bulle;