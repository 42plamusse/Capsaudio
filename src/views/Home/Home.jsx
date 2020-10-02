import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import capsrouge from "../../assets/capsrouge.png"
import capsbleu from "../../assets/capsbleu.png"
import capsbleufonce from "../../assets/capsbleufonce.png"
import Bulle from '../Bulle/Bulle';
import YoutubePlayer from '../../components/YoutubePlayer';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const Home = () => {
    const classes = useStyles();
    const [bulle, setBulle] = useState(null);

    const bulles = [
        {
            title: "Deux amours.",
            videoId: "K-2m2KgosVg",
            text: "« Tu es mon histoire d’amour.\nLa fable qui vibre mes lèvres,\nLe conte qui me rend tout frêle, \nLa muse de ce poème sans doute.\nJe suis la comptine qui t’apaise, \nLa note qui te touche.\nJe suis la caresse qui t’emmène, \nPrès de moi, loin de tout.\nJe suis ton artiste.\nCelui qui te peint et te tartine, \nCelui qui te mange et te vernis.\nDe mon pinceau je suis tes traits,\nJe te contemple une fois finie. \nJe m’impose au creux de tes reins,\nTes lèvres dévoilent ce si joli sourire. \nTandis que nos âmes se croisent de bon matin,\nL’écho de ma voix se fait sentir : \n« Je suis ton histoire d’amour. » »"
        },
        {
            title: "Hier.",
            videoId: "KRKjxO_WiOU",
            text: "« J’ai cru t’apercevoir hier.\nCe n’était probablement pas toi, \nMais ca n’aurait rien changé.\nMes mains, traîtresses de mon hésitation, se tordaient déjà fébrilement.\nHier, Je t’avais presque oublié.\nDevrais-je m’approcher, tenter de t’arrêter ? \nNe serait-ce que te saluer ?\nLe moment serait-il gênant ?\nC’est absurde en y pensant.\nVoila un an, la gêne eu été de ne pas être à tes côtés.\nTon odeur allait-elle me déranger, ou bien au contraire réveiller en moi les passions mortes et les douleurs que je croyais éteintes avec elle.\nJ’ai fait demi tour.\nUne fois le voile tombé, là où les rêves s’échouent et où les éléphants se retrouvent pour mourir,\nJ’aurais voulu que tu m’écrives.\nUne seule fois.\nMême pour quelques lignes,\nJ’aurais voulu que tu m’éclaires.\nQu’enfin s’éteigne la lumière,\nMais je sais que de nous, c’est tout ce qu’il restera.\nL’attente d’une lettre que tu n’écriras pas.\nEt ce bout de toi, sur un drap, qui jamais ne partira. »"
        },
        {
            title: "L'eau.",
            videoId: "hVuoWeq7yg4",
            text: "Comment vas-tu ? Murmure le souffle.\nJ'ai connu mieux, répond le lac. Je me laisse surprendre par le hasard, la vie.\nC'est ça la vie sauvage, dit le vent complice\nJe ne peux dire que j'ai une vie sauvage comparé à celle de mes compères. Ma vie suit son court. Le plus souvent...c’est plat. Parfois des rires de galets glissent sur ma peau. Parfois des animaux viennent prendre du bon temps et en profite pour chier dans mon eau. Les petits bâtards.\nEt je suis impuissant, je ne peux rétorquer. Ni même lancer mon sang sur leurs yeux arrogants.\nLes grandes déceptions ! dit le vent avec des mots d'oiseaux.\nEt qu'est ce qui t'en empêche ?\nJe ne suis qu'un lac, je ne suis qu'eau. Je n'ai point de bras. Je n'ai point de jambes Je n'ai point de bouche, et le souffle qui me parvient parfois ne m'appartient pas, Je ne peux le contrôler.\nJe ne vis que pour les autres."
        }
    ]

    const BubbleButton = ({ bulle, picture }) => {
        return (
            <Button style={{ borderRadius: 100 }} onClick={() => handleBulleNav({ bulle })}><img style={{ height: "15vh" }} src={picture}></img></Button>
        );
    }
    const handleBulleNav = ({ bulle }) => {
        setBulle(bulle);
    }
    return (
        <div className={classes.root}>
            <h1>Bulles de prout</h1>
            <div>
                <BubbleButton bulle={bulles[0]} picture={capsrouge} />
                <BubbleButton bulle={bulles[1]} picture={capsbleu} />
                <BubbleButton bulle={bulles[2]} picture={capsbleufonce} />
            </div>
            {bulle ? <Bulle bulle={bulle} /> :

                <div>
                    <h2>L'instant poët</h2>
                    <div style={{ height: 280, padding: "16px 0px 16px 0px" }}>
                        <YoutubePlayer videoId={"n-V4AhinM20"} />
                    </div>
                    <p>Sans prétention ni prise de texte.</p>
                    <p>Découvrez des voix et des auteurs dans des bulles de prout chaque lundi.</p>
                    <p>Laissez une trace :</p>
                    <a href="mailto:caps@instantprout.fr">caps@instantprout.fr</a>
                </div>
            }
        </div>
    );
}

export default Home;