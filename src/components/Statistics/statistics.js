import React from "react"
import { Grid, Paper, Typography, Container } from '@material-ui/core';
import CountUp from 'react-countup';
import StatisticStyle from './statistics-style';
import data from './statistics-data';
export default function Statistics() {
    const classes = StatisticStyle();
    return (
        <div id="statistics"> 
        <Container>
            <Grid container spacing={3} >
                {
                    data.map((statistics) =>
                        (
                        <Grid item xs={12} lg={3} md={3} sm={6} key={statistics.id} >
                                <Paper className={classes.paper} elevation={3}>
                                   
                                    <img src={statistics.url} height="100" width="100"/>
                                    <Typography variant="h2" component="h1"><CountUp end={parseInt(statistics.value)} duration={3} className={classes.val} /></Typography>
                                    <Typography variant="h5" className={classes.name} >{statistics.name}</Typography>
                                </Paper>
                            </Grid>
                    )  )
                }
            </Grid>
        </Container>
        </div>
    )
}