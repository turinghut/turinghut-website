import React, { useState } from "react";
import { EventsList } from "./EventsComps";
import { Paper, Slide } from '@material-ui/core';
import {upcomingEvent} from "./EventsData";
import "./EventStyles.css";
import Typography from '@material-ui/core/Typography';


export const Events = () => {
    const [slideIn, setSlideIn] = useState(false);

    return <div align="center" className="eventsComponent"><h2>EVENTS</h2>

        <EventsList />
        <div className="upcomingEventTab">
            <h2 className="upcomingEventTitle">UPCOMING EVENT</h2>
            <Paper elevation={6} className="upcomingEventPaper">
                <img className="upcomingEventImage" onClick={() => { setSlideIn(!slideIn) }} src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/s720x720/95913397_2869811633133317_2388660278012149760_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeE57UuBajJ7IzxJelCrb2vZh6YYytGVFjiHphjK0ZUWOOIOz73a2yHNddE8sqtkZDk&_nc_oc=AQlfv8OBWNuJ8hvASPxNjp-dfGr85BngsKDxe488kdVlnaJ5CUQxwjE7Lgi7ZFvqP--ek6z2ufC1cYgo7XVrF0Fx&_nc_ht=scontent.fymy1-1.fna&_nc_tp=7&oh=84cf1db715d8c8217c5921e9ed056a6b&oe=5F303002" />
                <Slide direction={"up"} in={slideIn} ><div className="details" onClick={() => { setSlideIn(!slideIn) }} className="upcomingEventTextOuter">
                    <div align="center" className="upcomingEventTextInner">
                        <Typography variant="h4">{upcomingEvent.name}</Typography>
                        <Typography variant="h5">{upcomingEvent.date}</Typography>
                        <br />
                        <Typography variant="p">{upcomingEvent.startTime+" - "+upcomingEvent.endTime}</Typography>
                    </div>
                </div>
                </Slide>

            </Paper>
        </div>

    </div>
}
