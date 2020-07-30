import React from "react"
import { Grid, Paper, Typography, Container } from '@material-ui/core';
import CountUp from 'react-countup';
import StatisticStyle from './statistics-style';
import Stats from '../assets/stats.json';
export default function Statistics() {
    const statistics = Stats.statistics;
    const classes = StatisticStyle();
    return (
        <Container>
            <Grid container spacing={3} >
                {
                    statistics.map((statistics, i) =>
                        (
                            <Grid item xs={12} lg={3} md={3} sm={6} key={i}>
                                <Paper className={classes.paper} elevation={3}>
                                    <Typography variant="h2" component="h1"><CountUp end={statistics.value} duration={3} className={classes.val} /></Typography>
                                    <Typography variant="h5" className={classes.name} >{statistics.name}</Typography>
                                </Paper>
                            </Grid>
                        ))

                }
            </Grid>
        </Container>
    )
}