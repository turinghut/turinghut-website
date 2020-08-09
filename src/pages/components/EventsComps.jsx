import React, { useState } from "react"
import { Grid, Paper, Slide } from '@material-ui/core'
import "./EventStyles.css";
import EventsData from "./EventsData.json";
import Typography from '@material-ui/core/Typography';
import styles from "./EventStyles.js";

export const EventTab = (props) => {
    const [slideIn, setSlideIn] = useState(false);
    const classes = styles();
    return <Paper elevation={6} className={classes.eventPaper}>
        <img className={props.type === "past" ? classes.eventImage : classes.upcomingEventImage} onClick={() => { setSlideIn(!slideIn) }} src={props.data.imageAddress} />

        <Slide direction={props.type === "past" ? "down" : "up"} in={slideIn} >
            <div onClick={() => { setSlideIn(!slideIn) }} className={props.type === "past" ? classes.details : classes.upcomingEventTextOuter}>
                {props.type === "past"
                    ?
                    <div className={classes.eventText}>
                        <Typography variant="body2">{props.data.name}</Typography>
                        <Typography variant="body2">{props.data.date}</Typography>
                    </div>
                    :
                    <div className={classes.upcomingEventTextInner}>
                        <Typography variant="h4">{props.data.name}</Typography>
                        <Typography variant="h5">{props.data.date}</Typography>
                        <br />
                        <Typography variant="body2">{props.data.startTime + " - " + props.data.endTime}</Typography>
                    </div>
                }

            </div>
        </Slide>

    </Paper>

}




export const EventsList = () => <Grid justify="center" container item xs={12} spacing={4}>
    {EventsData.allEvents.map((data) => (
        <Grid item xs={3}  key={data.key}>
            <EventTab data={data} type="past" />
        </Grid>)
    )}
</Grid>
