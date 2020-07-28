import React, { useState } from "react";
import { EventsList } from "./EventsComps";
import { Paper, Slide } from '@material-ui/core';

export const Events = () => {
    const [slidein, setSlideIn] = useState(false);

    return <div align="center" style={{ overflowX: "hidden", overflowY: "hidden" }}><h2>EVENTS</h2>

        <EventsList />
        <div style={{ bottom: 0 }}>
            <h2 style={{ margin: "40px" }}>UPCOMING EVENT</h2>
            <Paper elevation={6} style={{ position: "relative", width: "50%" }}>
                <img style={{ height: "auto", width: "100%" }} onClick={() => { setSlideIn(!slidein) }} src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/s720x720/95913397_2869811633133317_2388660278012149760_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeE57UuBajJ7IzxJelCrb2vZh6YYytGVFjiHphjK0ZUWOOIOz73a2yHNddE8sqtkZDk&_nc_oc=AQlfv8OBWNuJ8hvASPxNjp-dfGr85BngsKDxe488kdVlnaJ5CUQxwjE7Lgi7ZFvqP--ek6z2ufC1cYgo7XVrF0Fx&_nc_ht=scontent.fymy1-1.fna&_nc_tp=7&oh=84cf1db715d8c8217c5921e9ed056a6b&oe=5F303002" />
                <Slide direction={"up"} in={slidein} ><div className="details" onClick={() => { setSlideIn(!slidein) }} style={{ marginTop: "35%", backgroundColor: "white", height: "50%", width: "100%", position: "absolute", top: 0, bottom: 0, right: 0, left: 0, opacity: 1 }}>
                    <div align="center" style={{ textAlign: "center", position: "absolute", marginTop: "5%", top: "0%", left: "50%", transform: "translate(-50%, 0%)" }}>
                        <h2 className="eventdetailsH2">Turing Cup</h2>
                        <h1 className="eventdetailsH1">28 JULY, 2020</h1>
                        <p className="eventdetailsP">5:00 PM - 8:00 PM</p>
                    </div>
                </div>
                </Slide>

            </Paper>
        </div>

    </div>
}
