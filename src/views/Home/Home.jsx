import React, { useState, useEffect } from 'react';
import { Button, makeStyles, Collapse, Fade } from '@material-ui/core';
import capsrouge from "../../assets/capsrouge.png"
import capsbleu from "../../assets/capsbleu.png"
import capsbleufonce from "../../assets/capsbleufonce.png"
import capsjaune from "../../assets/capsjaune.png"
import capsnoir from '../../assets/capsnoir.png'
import Bulle from '../Bulle/Bulle';

const useStyles = makeStyles({
    root: {
        minHeight: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        maxWidth: 600,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bulleButton: {
        borderRadius: 360,
        position: "absolute",
        boxShadow: "2px 2px 8px",
        padding: 0,
        margin: 0,
        transition: "top 2s, left 2s"
        // top: `${Math.random() * 100}vh`,
        // left: `${Math.random() * 100}vw`,
    }
})


const Home = () => {
    const classes = useStyles();
    const [currentBulle, setCurrentBulle] = useState(null);
    const [collapse, setCollapse] = useState(false);
    const [fade, setFade] = useState(true)
    const [bullesButtons, setBullesButtons] = useState([]);

    const bulles = [
        {
            img: capsrouge,
            title: "Deux amours.",
            videoId: "K-2m2KgosVg",
            text: "« Tu es mon histoire d’amour.\nLa fable qui vibre mes lèvres,\nLe conte qui me rend tout frêle, \nLa muse de ce poème sans doute.\nJe suis la comptine qui t’apaise, \nLa note qui te touche.\nJe suis la caresse qui t’emmène, \nPrès de moi, loin de tout.\nJe suis ton artiste.\nCelui qui te peint et te tartine, \nCelui qui te mange et te vernis.\nDe mon pinceau je suis tes traits,\nJe te contemple une fois finie. \nJe m’impose au creux de tes reins,\nTes lèvres dévoilent ce si joli sourire. \nTandis que nos âmes se croisent de bon matin,\nL’écho de ma voix se fait sentir : \n« Je suis ton histoire d’amour. » »"
        },
        {
            img: capsbleu,
            title: "Hier.",
            videoId: "KRKjxO_WiOU",
            text: "« J’ai cru t’apercevoir hier.\nCe n’était probablement pas toi, \nMais ca n’aurait rien changé.\nMes mains, traîtresses de mon hésitation, se tordaient déjà fébrilement.\nHier, Je t’avais presque oublié.\nDevrais-je m’approcher, tenter de t’arrêter ? \nNe serait-ce que te saluer ?\nLe moment serait-il gênant ?\nC’est absurde en y pensant.\nVoila un an, la gêne eu été de ne pas être à tes côtés.\nTon odeur allait-elle me déranger, ou bien au contraire réveiller en moi les passions mortes et les douleurs que je croyais éteintes avec elle.\nJ’ai fait demi tour.\nUne fois le voile tombé, là où les rêves s’échouent et où les éléphants se retrouvent pour mourir,\nJ’aurais voulu que tu m’écrives.\nUne seule fois.\nMême pour quelques lignes,\nJ’aurais voulu que tu m’éclaires.\nQu’enfin s’éteigne la lumière,\nMais je sais que de nous, c’est tout ce qu’il restera.\nL’attente d’une lettre que tu n’écriras pas.\nEt ce bout de toi, sur un drap, qui jamais ne partira. »"
        },
        {
            img: capsbleufonce,
            title: "L'eau.",
            videoId: "hVuoWeq7yg4",
            text: "Comment vas-tu ? Murmure le souffle.\nJ'ai connu mieux, répond le lac. Je me laisse surprendre par le hasard, la vie.\nC'est ça la vie sauvage, dit le vent complice\nJe ne peux dire que j'ai une vie sauvage comparé à celle de mes compères. Ma vie suit son court. Le plus souvent...c’est plat. Parfois des rires de galets glissent sur ma peau. Parfois des animaux viennent prendre du bon temps et en profite pour chier dans mon eau. Les petits bâtards.\nEt je suis impuissant, je ne peux rétorquer. Ni même lancer mon sang sur leurs yeux arrogants.\nLes grandes déceptions ! dit le vent avec des mots d'oiseaux.\nEt qu'est ce qui t'en empêche ?\nJe ne suis qu'un lac, je ne suis qu'eau. Je n'ai point de bras. Je n'ai point de jambes Je n'ai point de bouche, et le souffle qui me parvient parfois ne m'appartient pas, Je ne peux le contrôler.\nJe ne vis que pour les autres."
        },
        {
            img: capsjaune,
            title: "L'arc-en-ciel amoureux.",
            videoId: "3ymxO1SczeE",
            text: "Ta voix est violette. Odorante anesthésie de mon esprit. Aphrodisiaque qui secoue l‘oreiller de ma libido. Indigo, je te chante mon attirance sous un manteau de saison. Je vole la nuit. Guidé par l’étoile qui porte ton nom. Piégé par l’émoi de te sentir loin.\nTu me touches, mon corps s’enflamme d’un bleu sans suie. Je te touche, ton désir me réclame. Vert est son regard lorsqu’il me rend tout chose\nTu es la vie en mouvement, un rayon de soleil jauni par le ciel. Mes sens s’aiguisent et se bousculent, s’éveillent et se stimulent. Je m’aveugle en écoutant ton parfum. Tu es l’orange de mon matin, douce et acide. La rose de mon jardin, piquante et fragile. L’héroïne de mon cœur carmin, forte et gracile\nTu es la couleur de mes sentiments."
        },
        {
            img: capsnoir,
            title: "Le mal.",
            videoId: "TLBB1xSLhJw",
            text: "« Raaaaah ! » crie le son de ma gorge qui ne me revient. L'horizon sent la peine et la garde pour lui. Personne ne m'entend, Putain de douleur qui ne s'éteint pas. Désarmée, j'avance sur le champ de bataille. Accompagnée par le deuil qui comble le vide, rongée par la peur que mon coeur s’invalide. Je me mords. Je me drogue pour t'oublier lors de nuits glaciales. Je m'endors pour combler le coït de ces nuits nuptiales. Tu dévores mes rêves et j'en suis triste. Triste comme l'artiste qui se perd dans l'amour, Triste de te voir à chaque remous de paupière. Je me tords en réclamant ce que je n'ai pas. Je me meurs en oubliant ce que je suis. Silencieusement, j’avale tes doutes et j'en chie. Tu es mon mâle, je suis ton mal."
        }
    ]

    const populateBullesButton = () => {
        const buttons = bulles.map((bulle, key) =>
            <BubbleButton key={key} bulle={bulle} />
        );
        setBullesButtons(buttons);
    }

    useEffect(() => {
        populateBullesButton();
    }, [])


    const randomBulleStyle = () => {
        const minSize = 8;
        const multSize = 8;
        const bulleSize = Math.random() * multSize + minSize;
        const leftPos = Math.random() * (100 - bulleSize);
        const topPos = Math.random() * (100 - bulleSize);

        return (
            {
                height: `${bulleSize}vh`,
                top: `${topPos}vh`,
                left: `${leftPos}vw`
            }
        );
    }
    const BubbleButton = ({ bulle }) => {
        const bulleStyle = randomBulleStyle();
        return (
            <Button className={classes.bulleButton} style={{ top: bulleStyle.top, left: bulleStyle.left }}
                onClick={() => handleBulleNav({ bulle })}><img style={{ height: bulleStyle.height, opacity: currentBulle ? '0.8' : "0.95" }} src={bulle.img}></img></Button>
        );
    }

    const handleBulleNav = ({ bulle }) => {
        if (currentBulle) setCollapse((prev) => !prev);
        setFade((prev) => !prev);
        setTimeout(() => (setCurrentBulle(bulle), setCollapse((prev) => !prev), setFade((prev) => !prev)), 800);
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1>BULLES DE PROUT</h1>

                <Fade in={fade} timeout={300}>

                    <div>
                        {bulles.map((bulle, key) =>

                            <BubbleButton key={key} bulle={bulle} />
                        )}
                    </div>
                </Fade>

                {/* <div>
                    <BubbleButton bulle={bulles[0]} picture={capsrouge} />
                    <BubbleButton bulle={bulles[1]} picture={capsbleu} />
                    <BubbleButton bulle={bulles[2]} picture={capsbleufonce} />
                    <BubbleButton bulle={bulles[3]} picture={capsjaune} />
                    <BubbleButton bulle={bulles[4]} picture={capsnoir} />
                </div> */}
                <Collapse in={collapse} timeout={800}>
                    {
                        currentBulle ? <Bulle bulle={currentBulle} /> : null
                    }
                </Collapse>

            </div>
        </div>
    );
}

export default Home;