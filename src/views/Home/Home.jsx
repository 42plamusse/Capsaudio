import React, { useState } from 'react';
import { makeStyles, Collapse, Fade, useMediaQuery } from '@material-ui/core';
import capsrouge from "../../assets/capsrouge.png"
import capsbleu from "../../assets/capsbleu.png"
import capsbleufonce from "../../assets/capsbleufonce.png"
import capsjaune from "../../assets/capsjaune.png"
import capsnoir from '../../assets/capsnoir.png'
import Bulle from '../Bulle/Bulle';

const useStyles = makeStyles({
    root: {
        flex: '1',
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
        cursor: "pointer",
        borderRadius: 360,
        position: "absolute",
        boxShadow: "2px 2px 8px",
        padding: 0,
        margin: 0,
    }
})


const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true })
    const classes = useStyles({ isMobile });
    const [currentBulle, setCurrentBulle] = useState(null);
    const [collapse, setCollapse] = useState(false);
    const [fade, setFade] = useState(false)

    const bulles = [
        {
            style: {
                size: "16vh",
                top: "16vh",
                left: "30vw",
            },
            img: capsrouge,
            title: "Deux amours.",
            videoId: "K-2m2KgosVg",
            text: "Tu es mon histoire d’amour. La fable qui vibre mes lèvres. Le conte qui me rend tout frêle,  la muse de ce poème sans doute. Je suis la comptine qui t’apaise, la note qui te touche. Je suis la caresse qui t’emmène, près de moi, loin de tout.\nJe suis ton artiste. Celui qui te peint et te tartine, celui qui te mange et te vernis. De mon pinceau je suis tes traits, je te contemple une fois finie. \nJe m’impose au creux de tes reins, tes lèvres dévoilent ce si joli sourire. Tandis que nos âmes se croisent de bon matin, l’écho de ma voix se fait sentir :\n« Je suis ton histoire d’amour. »"
        },
        {
            style: {
                size: "12vh",
                top: "10vh",
                left: "70vw",
            },
            img: capsbleu,
            title: "Hier.",
            videoId: "KRKjxO_WiOU",
            text: "J’ai cru t’apercevoir hier. Ce n’était probablement pas toi, mais ça n’aurait rien changé. Mes mains, traîtresses de mon hésitation, se tordaient déjà fébrilement. Hier, Je t’avais presque oublié.\nDevrais-je m’approcher, tenter de t’arrêter ? Ne serait-ce que te saluer ? Le moment serait-il gênant ? C’est absurde en y pensant. Voila un an, la gêne eu été de ne pas être à tes côtés. Ton odeur allait-elle me déranger, ou bien au contraire réveiller en moi les passions mortes et les douleurs que je croyais éteintes avec elle. J’ai fait demi tour\nUne fois le voile tombé, là où les rêves s’échouent et où les éléphants se retrouvent pour mourir, j’aurais voulu que tu m’écrives. Une seule fois. Même pour quelques lignes, j’aurais voulu que tu m’éclaires. Qu’enfin s’éteigne la lumière. Mais je sais que de nous, c’est tout ce qu’il restera. L’attente d’une lettre que tu n’écriras pas. Et ce bout de toi, sur un drap, qui jamais ne partira."
        },
        {
            style: {
                size: "18vh",
                top: "60vh",
                left: "30vw",

            },
            img: capsbleufonce,
            title: "L'eau.",
            videoId: "hVuoWeq7yg4",
            text: "Comment vas-tu ? Murmure le souffle.\nJ'ai connu mieux, répond le lac. Je me laisse surprendre par le hasard, la vie. C'est ça la vie sauvage, dit le vent complice. Je ne peux dire que j'ai une vie sauvage comparé à celle de mes compères. Ma vie suit son court. Le plus souvent...c’est plat. Parfois des rires de galets glissent sur ma peau. Parfois des animaux viennent prendre du bon temps et en profite pour chier dans mon eau. Les petits bâtards. Et je suis impuissant, je ne peux rétorquer. Ni même lancer mon sang sur leurs yeux arrogants.\nLes grandes déceptions ! dit le vent avec des mots d'oiseaux. Et qu'est-ce qui t'en empêche ?\nJe ne suis qu'un lac, je ne suis qu'eau. Je n'ai point de bras. Je n'ai point de jambes Je n'ai point de bouche, et le souffle qui me parvient parfois ne m'appartient pas, Je ne peux le contrôler. Je ne vis que pour les autres."
        },
        {
            style: {
                size: "10vh",
                top: "60vh",
                left: "5vw",
            },
            img: capsjaune,
            title: "L'arc-en-ciel amoureux.",
            videoId: "3ymxO1SczeE",
            text: "Ta voix est violette. Odorante anesthésie de mon esprit. Aphrodisiaque qui secoue l‘oreiller de ma libido. Indigo, je te chante mon attirance sous un manteau de saison. Je vole la nuit. Guidée par l’étoile qui porte ton nom. Piégée par l’émoi de te sentir loin.\nTu me touches, mon corps s’enflamme d’un bleu sans suie. Je te touche, ton désir me réclame. Vert est son regard lorsqu’il me rend tout chose.\nTu es la vie en mouvement, un rayon de soleil jauni par le ciel. Mes sens s’aiguisent et se bousculent, s’éveillent et se stimulent. Je m’aveugle en écoutant ton parfum. Tu es l’orange de mon matin, douce et acide. La rose de mon jardin, piquante et fragile. L’héroïne de mon cœur carmin, forte et gracile.\nTu es la couleur de mes sentiments."
        },
        {
            style: {
                size: "16vh",
                top: "70vh",
                left: "68vw",
            },
            img: capsnoir,
            title: "Le mal.",
            videoId: "TLBB1xSLhJw",
            text: "« Raaaaah ! » crie le son de ma gorge qui ne me revient. L'horizon sent la peine et la garde pour lui. Personne ne m'entend, Putain de douleur qui ne s'éteint pas. Désarmée, j'avance sur le champ de bataille. Accompagnée par le deuil qui comble le vide, rongée par la peur que mon coeur s’invalide. Je me mords. Je me drogue pour t'oublier lors de nuits glaciales. Je m'endors pour combler le coït de ces nuits nuptiales. Tu dévores mes rêves et j'en suis triste. Triste comme l'artiste qui se perd dans l'amour, Triste de te voir à chaque remous de paupière. Je me tords en réclamant ce que je n'ai pas. Je me meurs en oubliant ce que je suis. Silencieusement, j’avale tes doutes et j'en chie.\nTu es mon mâle, je suis ton mal."
        }
    ]


    // const randomBulleStyle = () => {
    //     const minSize = 8;
    //     const multSize = 8;
    //     const bulleSize = Math.random() * multSize + minSize;
    //     const leftPos = Math.random() * (100 - bulleSize);
    //     const topPos = Math.random() * (100 - bulleSize);

    //     return (
    //         {
    //             height: `${bulleSize}vh`,
    //             top: `${topPos}vh`,
    //             left: `${leftPos}vw`
    //         }
    //     );
    // }

    const BubbleButton = ({ bulle }) => {
        const { style, img } = bulle;
        return (
            <div className={classes.bulleButton} style={{ top: style.top, left: style.left, height: style.size, width: style.size }}
                onClick={() => handleBulleNav(bulle)}>
                <img style={{ height: style.size, opacity: "0.95" }} alt="BULLE" src={img}></img>
            </div>
        );
    }

    const handleBulleNav = (bulle) => {
        if (bulle) {
            setFade((prev) => !prev);
            setTimeout(() => {
                return (setCurrentBulle(bulle),
                    setCollapse((prev) => !prev))
            }, 400);
        }
        else {
            setCollapse((prev) => !prev);
            setTimeout(() => {
                return (setCurrentBulle(null),
                    setFade((prev) => !prev))
            }, 2000);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1>BULLES DE PROUT</h1>
                <Fade in={!fade} timeout={400}>
                    <div>
                        {bulles.map((bulle, key) =>

                            <BubbleButton key={key} bulle={bulle} />
                        )}
                    </div>
                </Fade>
                <Collapse in={collapse} timeout={2300}>
                    <div>

                        {currentBulle ? <Bulle bulle={currentBulle} collapse={collapse} handleBulleNav={handleBulleNav} /> : null}
                    </div>
                </Collapse>

            </div>
        </div>
    );
}

export default Home;