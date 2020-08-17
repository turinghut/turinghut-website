import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    heading: {
        fontFamily: "'Catamaran', sans-serif",
        textTransform: "uppercase",
        color: '#000000',
        textAlign: "center",
        marginTop: '4vh'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    gridContainer: {
        justifyContent: 'spacing-around',
        spacing: '5',
        margin: '2vh'
    },
    dialogHeading: {
        fontFamily: "'Catamaran', sans-serif",
        textAlign: "center",
        color: '#000000',
        fontSize: '1.5rem'
    },
    dialogContent: {
        fontFamily: "'Times New Roman'",
        color: '#000000',
    },
    icon:{
        fontSize: '1.2rem'
    },
    githubIcon: {
        fontSize: '1.7rem',
        marginLeft: '3vw',
        color: '#000000'
    },
    linkedinIcon: {
        fontSize: '1.9rem',
        marginLeft: '1.5vw',
        color: 'blue'
    },
    tilebar: {
        left: 0,
        right: 0,
        display: 'flex',
        position: 'absolute',
        background: '#000000',
        opacity: 0.5,
        alignItems: 'center',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
    },
    tilebarBottom: {
        bottom: '0vh'
    },
    tilebarRootTitle: {
        height: '10vh'
    },
    titleWrap: {
        color: '#fff',
        overflow: 'hidden',
        flexGrow: 1,
        marginLeft: '2vh',
        marginRight: '2vh'
    },
    titlePosRight: {
        marginRight: 0
    },
    title: {
        overflow: 'hidden',
        fontSize: '1rem',
        lineHeight: '24px',
        whiteSpace: '',
        textOverflow: 'ellipsis'
    },
    actionItem: {
        marginRight: '1vh',
        color: '#fff'
    },
    media: {
        height: '45vh',
    },
    card: {
        backgroundColor: 'transparent',
        width: '100%'
    }
})
);

export default styles;
