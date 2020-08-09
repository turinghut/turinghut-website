import React from "react";
import { EventsList, EventTab } from "./EventsComps";
import { upcomingEvent } from "./EventsData";
import "./EventStyles.css";
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

export const Events = () => {


    // return <div align="center" className="eventsComponent">
    return <Grid container style={{overflow:"hidden",marginTop:"20px"}}>
        <Grid elevation={4} item xs={12}>
            <Typography variant="h4" className="eventsTitle">EVENTS</Typography>
            <EventsList />
        </Grid>
        <Grid item xs={12} style={{marginTop:"20px"}}>
            <Typography style={{marginTop:"20px"}} variant="h4">UPCOMING EVENTS</Typography>
        </Grid>
        <Grid justify="center"  style={{marginBottom:"20px"}} container spacing={2}>
            {upcomingEvent.map((data)=><Grid item xs={4} className="eventTab" key={data.key}><EventTab data={data} type="upcoming" /></Grid>)}
       </Grid>
    </Grid>


}
