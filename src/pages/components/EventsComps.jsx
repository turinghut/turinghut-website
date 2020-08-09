import React, { useState } from "react"
import { Grid, Paper, Slide } from '@material-ui/core'
import "./EventStyles.css";
import { allEvents } from "./EventsData";
import Typography from '@material-ui/core/Typography';

export const EventTab = (props) => {
    const [slideIn, setSlideIn] = useState(false);
    return <Paper elevation={6} className="eventPaper">
        <img className={props.type === "past" ? "eventImage" : "upcomingEventImage"} onClick={() => { setSlideIn(!slideIn) }} src={props.data.imageAddress} />

        <Slide direction={props.type === "past" ? "down" : "up"} in={slideIn} >
            <div onClick={() => { setSlideIn(!slideIn) }} className={props.type === "past" ? "details" : "upcomingEventTextOuter"}>
                {props.type === "past"
                    ?
                    <div className="eventText">
                        <Typography variant="body2">{props.data.name}</Typography>
                        <Typography variant="body2">{props.data.date}</Typography>
                    </div>
                    :
                    <div className="upcomingEventTextInner">
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
    {allEvents.map((data) => (
        <Grid item xs={3}  key={data.key}>
            <EventTab data={data} type="past" />
        </Grid>)
    )}
</Grid>
