import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import CountUp from 'react-countup';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',

    },
    val: {
        fontSize: '100px'
    },
    name: {
        fontSize: '30px'
    },
    grid: {
        paddingRight: '100px',
        paddingLeft: '100px'
    }

}))

export default function Statistics() {

    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <Paper className={classes.paper}>
                    <h1><CountUp end={72} className={classes.val} /></h1>
                    <p className={classes.name}>Club Members</p>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <Paper className={classes.paper}>
                    <h1><CountUp end={7} className={classes.val} /></h1>
                    <p className={classes.name}>Participations</p>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <Paper className={classes.paper}>
                    <h1><CountUp end={15} className={classes.val} /></h1>
                    <p className={classes.name}>Hosted Contests</p>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <Paper className={classes.paper}>
                    <h1><CountUp end={48} className={classes.val} /></h1>
                    <p className={classes.name}>Sessions</p>
                </Paper>
            </Grid>
        </Grid>
    )
}