import React, { useState } from 'react';
import { makeStyles, Collapse, Fade, useMediaQuery } from '@material-ui/core';
import capsrouge from "../../assets/capsrouge.png"
import capsbleu from "../../assets/capsbleu.png"
import capsbleuclair from "../../assets/capsbleuclair.png"
import capsbleufonce from "../../assets/capsbleufonce.png"
import capsjaune from "../../assets/capsjaune.png"
import capsnoir from '../../assets/capsnoir.png'
import capsvert from '../../assets/capsvert.png'
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
        // maxWidth: 600,
        minHeight: "20vh",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
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
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);
    const [title, setTitle] = useState("");

    const bulles = [
        {
            style: {
                size: "10vh",
                top: "10vh",
                left: "10vw",
            },
            img: capsrouge,
            title: "Deux amours.",
            videoId: "A8AXZjjKIG0",
            text: "Tu es mon histoire d’amour. La fable qui vibre mes lèvres. Le conte qui me rend tout frêle,  la muse de ce poème sans doute. Je suis la comptine qui t’apaise, la note qui te touche. Je suis la caresse qui t’emmène, près de moi, loin de tout.\nJe suis ton artiste. Celui qui te peint et te tartine, celui qui te mange et te vernis. De mon pinceau je suis tes traits, je te contemple une fois finie. \nJe m’impose au creux de tes reins, tes lèvres dévoilent ce si joli sourire. Tandis que nos âmes se croisent de bon matin, l’écho de ma voix se fait sentir :\n« Je suis ton histoire d’amour. »"
        },
        {
            style: {
                size: "12vh",
                top: "12vh",
                left: "72vw",
            },
            img: capsbleu,
            title: "Hier.",
            videoId: "iOe-YjSeyFM",
            text: "J'ai cru t'apercevoir hier.\nCe n'était probablement pas toi, \nMais ca n'aurait rien changé.\nMes mains, traîtresses de mon hésitation, se tordaient déjà fébrilement.\nHier, Je t'avais presque oublié.\nDevrais-je m'approcher, tenter de t'arrêter ? \nNe serait-ce que te saluer ?\nLe moment serait-il gênant ?\nC'est absurde en y pensant.\nVoilà un an, la gêne eu été de ne pas être à tes côtés.\nTon odeur allait-elle me déranger, ou bien au contraire réveiller en moi les passions mortes et les douleurs que je croyais éteintes avec elle.\nJ'ai fait demi-tour.\nUne fois le voile tombé, là où les rêves s'échouent et ou les éléphants se retrouvent pour mourir,\nj'aurais voulu que tu m'écrives.\nUne seule fois.\nMême pour quelques lignes,\nJ'aurais voulu que tu m'éclaires.\nQu'enfin s'éteigne la lumière,\nMais je sais que de nous, c'est tout ce qu'il restera.\nL'attente d'une lettre que tu n'écriras pas.\nEt ce bout de toi, sur un drap, qui jamais ne partira."
        },
        {
            style: {
                size: "14vh",
                top: "70vh",
                left: "28vw",

            },
            img: capsbleufonce,
            title: "L'eau.",
            videoId: "n_wOvnesTKA",
            text: "Comment vas-tu ? Murmure le souffle.\nJ'ai connu mieux, répond le lac. Je me laisse surprendre par le hasard, la vie. C'est ça la vie sauvage, dit le vent complice. Je ne peux dire que j'ai une vie sauvage comparé à celle de mes compères. Ma vie suit son court. Le plus souvent...c’est plat. Parfois des rires de galets glissent sur ma peau. Parfois des animaux viennent prendre du bon temps et en profite pour chier dans mon eau. Les petits bâtards. Et je suis impuissant, je ne peux rétorquer. Ni même lancer mon sang sur leurs yeux arrogants.\nLes grandes déceptions ! dit le vent avec des mots d'oiseaux. Et qu'est-ce qui t'en empêche ?\nJe ne suis qu'un lac, je ne suis qu'eau. Je n'ai point de bras. Je n'ai point de jambes Je n'ai point de bouche, et le souffle qui me parvient parfois ne m'appartient pas, Je ne peux le contrôler. Je ne vis que pour les autres."
        },
        {
            style: {
                size: "16vh",
                top: "56vh",
                left: "4vw",
            },
            img: capsjaune,
            title: "L'arc-en-ciel amoureux.",
            videoId: "iDQlFfxyxJQ",
            text: "Ta voix est violette. Odorante anesthésie de mon esprit. Aphrodisiaque qui secoue l‘oreiller de ma libido. Indigo, je te chante mon attirance sous un manteau de saison. Je vole la nuit. Guidée par l’étoile qui porte ton nom. Piégée par l’émoi de te sentir loin.\nTu me touches, mon corps s’enflamme d’un bleu sans suie. Je te touche, ton désir me réclame. Vert est son regard lorsqu’il me rend tout chose.\nTu es la vie en mouvement, un rayon de soleil jauni par le ciel. Mes sens s’aiguisent et se bousculent, s’éveillent et se stimulent. Je m’aveugle en écoutant ton parfum. Tu es l’orange de mon matin, douce et acide. La rose de mon jardin, piquante et fragile. L’héroïne de mon cœur carmin, forte et gracile.\nTu es la couleur de mes sentiments."
        },
        {
            style: {
                size: "18vh",
                top: "72vh",
                left: "60vw",
            },
            img: capsnoir,
            title: "Le mal.",
            videoId: "Y0-sWxeasE4",
            text: "« Raaaaah ! » crie le son de ma gorge qui ne me revient. L'horizon sent la peine et la garde pour lui. Personne ne m'entend, Putain de douleur qui ne s'éteint pas. Désarmée, j'avance sur le champ de bataille. Accompagnée par le deuil qui comble le vide, rongée par la peur que mon coeur s’invalide. Je me mords. Je me drogue pour t'oublier lors de nuits glaciales. Je m'endors pour combler le coït de ces nuits nuptiales. Tu dévores mes rêves et j'en suis triste. Triste comme l'artiste qui se perd dans l'amour, Triste de te voir à chaque remous de paupière. Je me tords en réclamant ce que je n'ai pas. Je me meurs en oubliant ce que je suis. Silencieusement, j’avale tes doutes et j'en chie.\nTu es mon mâle, je suis ton mal."
        },
        {
            style: {
                size: "20vh",
                top: "42vh",

            },
            img: capsbleuclair,
            title: "L'air.",
            videoId: "fPaIYEL3XaM",
            text: "Inodore, Tu me sens sans me voir. Incolore, tu me vois sans me sentir.\nInvisible, je suis partout et nul part. Dedans, dehors, à gauche à droite. L’air de rien, je passe ma vie à toucher des corps, pénétrant jusqu’à la veine qui les maintien en vie. Caressant où je ne peux rentrer, je me vois fouetter des hêtres faisant rougir l’automne.\nÔ Pauvres masochistes dont l’acte consenti est teinté de résiliation. Deux choix vous sont proposés, vivre ou mourir. L’ultimatum divin\nJe joui de la vie, je suis l’haleine de dieu, l’inspiration de l’artiste et de son dernier soupir.. J’aspire l’esprit des séraphins chevauchant les nuages de mon doux Zéphyr.\nJe ne suis qu’un mirage de l’existence. Éphémère composante de quelques millions d’années. Que suis-je sans ma violence \nRien qu’un passage anodin de vos moments oubliés."
        },
        {
            style: {
                size: "16vh",
                left: "58vw",
                top: "20vh",
                left: "32vw",
            },
            img: capsvert,
            title: "Requiem d’un escargot pour un humain.",
            videoId: "QfGeHRE2h34",
            text: "Tu files sur moi à la vitesse d’une étoile. Vision fugitive de mes yeux aveuglés. Je te sens que lorsque tu m’écrases, ma narine souffle ta tristesse. « ShhKrrk » est le son de mon adieu. « Merde ! » est le mot de ton respect. Baveuse est l’arrière de ta basket, heureuse sera la grive de ton jardin.\nJe n’ai pas de haine contre toi humain, je n’ai pas de peine, ni la peur du temps. Je suis victime de ma lenteur. J’étais là au mauvais moment. Une dernière fois je laisse ma trace, la coquille comme épitaphe : « Ici gît un aventurier qui se cherchait. Patient de se trouver, soif de liberté. »\nMe voici dans le paradis des phytophages, bavant avec des escargots de tout âge, petits, gros, tous chronophage, jusqu’à ce que « shhkrrk »."
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
            <div
                onMouseOver={() => { setTitle(bulle.title) }}
                // onMouseOut={() => { setTitle("") }}
                className={classes.bulleButton}
                style={{
                    top: style.top,
                    left: style.left,
                    height: style.size,
                    width: style.size,
                }}
                onClick={() => handleBulleNav(bulle)}>
                <img
                    style={{ height: style.size, opacity: "0.95" }} alt="BULLE" src={img} onLoad={() => { setLoading(false) }}></img>
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

            <Fade in={!loading} timeout={400}>
                <div style={{ display: loading ? "none" : "flex" }}
                    className={classes.container}>

                    <h1 style={{ zIndex: "10", fontWeight: 600, pointerEvents: "none" }}>BULLES DE PROUT</h1>

                    {title ? <h2 style={{ zIndex: "10", pointerEvents: "none" }}>{title}</h2> : null}

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
            </Fade>
        </div>
    );
}

export default Home;