import React, { useState } from "react"
import { Grid, Paper, Slide } from '@material-ui/core'
import "./EventStyles.css";
import { allEvents } from "./EventsData";
import Typography from '@material-ui/core/Typography';

const EventTab = (props) => {
    const [slideIn, setSlideIn] = useState(false);

    return <Grid conatiner item xs={3} className="eventTab" >
        <Paper elevation={6} className="eventPaper">
            <img className="eventImage" onClick={() => { setSlideIn(!slideIn) }} src={props.data.imageAddress} />

            <Slide direction={"down"} in={slideIn} ><div className="details" onClick={() => { setSlideIn(!slideIn) }} >
                <div className="eventText">
                    <Typography variant="p">{props.data.name}</Typography><br />
                    <Typography variant="p">{props.data.date}</Typography>
                </div>
            </div>
            </Slide>

        </Paper>
    </Grid>
}

export const EventsList = () => <Grid align="center" container item xs={12} spacing={4}>
    {allEvents.map((data) => <EventTab data={data} />)}
</Grid>
