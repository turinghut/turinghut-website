import React from "react";
import { EventsList, EventTab } from "./EventsComps";
import "./EventStyles.css";
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import EventsData from "./EventsData.json";
import styles from "./EventStyles.js"

export const Events = () => {

    const classes = styles();
    return <Grid align="center" container style={{overflow:"hidden",marginTop:"20px"}}>
        <Grid elevation={4} item xs={12}>
            <Typography variant="h4">EVENTS</Typography>
            <EventsList />
        </Grid>
        <Grid item xs={12} style={{marginTop:"20px"}}>
            <Typography style={{marginTop:"20px"}} variant="h4">UPCOMING EVENTS</Typography>
        </Grid>
        <Grid justify="center"  style={{marginBottom:"20px"}} container spacing={2}>
            {EventsData.upcomingEvents.map((data)=><Grid item xs={4} className="eventTab" key={data.key}><EventTab data={data} type="upcoming" /></Grid>)}
       </Grid>
    </Grid>


}
