import { makeStyles } from '@material-ui/core/styles';
const styles =makeStyles(theme => ({
        heading: {
            fontFamily: "'Catamaran', sans-serif",
            textTransform: "uppercase",
            color: '#000000',
            textAlign: "center",
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        "grid-container": {
            justifyContent: 'spacing-around',
            spacing: '5',
            margin: '2vh'
        },
        dialog: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            padding: theme.spacing(1, 3, 2),
            color: '#000000',
            boxShadow: 'none'
        },
        "dialog-heading": {
            fontFamily: "'Catamaran', sans-serif",
            textTransform: "uppercase",
            textAlign: "center",
        },
        "dialog-content" :{
            fontFamily:"'Times New Roman'",
            color: '#000000',
            fontSize: '2rem'
        },
        "github-icon" :{
            fontSize: 30,
            marginTop: '2vh',
            marginLeft: '3vw',
            color: '#000000'
        },
        "linkedin-icon" :{
            fontSize: 32,
            marginTop: '2vh',
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
        "tilebar-bottom": {
            bottom: '0vh'
        },
        "tilebar-root-title": {
            height: '10vh'
        },

        "title-wrap": {
            color: '#fff',
            overflow: 'hidden',
            flexGrow: 1,
            marginLeft: '2vh',
            marginRight: '2vh'
        },

        "title-pos-right": {
            marginRight: 0
        },
        title: {
            overflow: 'hidden',
            fontSize: '1rem',
            lineHeight: '24px',
            whiteSpace: '',
            textOverflow: 'ellipsis'
        },
        "action-item": {
            marginRight: '1vh',
            color: '#fff'
        },
        media: {
            height: '45vh',
        },
        card: {
            backgroundColor: 'transparent',
            width: '100%'
        },
        backdrop: {
            backgroundColor: 'transparent',
            boxShadow: 'none'
        }
    })
);
export default styles;