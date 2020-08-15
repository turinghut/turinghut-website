import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center'
    },

    name: {
        fontFamily: "RaleWay",
        marginTop: '2vh'
    },
    val: {
        fontWeight: 'bold'
    }

}));
export default useStyles;