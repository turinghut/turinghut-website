import React, { useState } from "react";
import { EventsList } from "./EventsComps";
import { Paper, Slide } from '@material-ui/core';
import { upcomingEvent } from "./EventsData";
import "./EventStyles.css";
import Typography from '@material-ui/core/Typography';


export const Events = () => {
    const [slideIn, setSlideIn] = useState(false);

    return <div align="center" className="eventsComponent"><h2>EVENTS</h2>

        <EventsList />
        <div className="upcomingEventTab">
            <h2 className="upcomingEventTitle">UPCOMING EVENT</h2>
            <Paper elevation={6} className="upcomingEventPaper">
                <img className="upcomingEventImage" onClick={() => { setSlideIn(!slideIn) }} src={upcomingEvent.imageAddress} />
                <Slide direction={"up"} in={slideIn} ><div className="details" onClick={() => { setSlideIn(!slideIn) }} className="upcomingEventTextOuter">
                    <div align="center" className="upcomingEventTextInner">
                        <Typography variant="h4">{upcomingEvent.name}</Typography>
                        <Typography variant="h5">{upcomingEvent.date}</Typography>
                        <br />
                        <Typography variant="p">{upcomingEvent.startTime + " - " + upcomingEvent.endTime}</Typography>
                    </div>
                </div>
                </Slide>

            </Paper>
        </div>

    </div>
}
