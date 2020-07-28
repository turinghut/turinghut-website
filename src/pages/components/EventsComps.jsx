import React, { useState } from "react"
import { Grid, Paper, Slide } from '@material-ui/core'


const EventTab = () => {
    const [dir, setDir] = useState(false);

    return <Grid conatiner item xs={3} className="eventTab" >
        <Paper elevation={6} style={{ position: "relative" }}>
            <img style={{ height: "80%", width: "100%" }} onClick={() => { setDir(!dir) }} src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/s720x720/95913397_2869811633133317_2388660278012149760_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeE57UuBajJ7IzxJelCrb2vZh6YYytGVFjiHphjK0ZUWOOIOz73a2yHNddE8sqtkZDk&_nc_oc=AQlfv8OBWNuJ8hvASPxNjp-dfGr85BngsKDxe488kdVlnaJ5CUQxwjE7Lgi7ZFvqP--ek6z2ufC1cYgo7XVrF0Fx&_nc_ht=scontent.fymy1-1.fna&_nc_tp=7&oh=84cf1db715d8c8217c5921e9ed056a6b&oe=5F303002" />

            <Slide direction={"down"} in={dir} ><div className="details" onClick={() => { setDir(!dir) }} style={{ backgroundColor: "white", height: "100%", width: "100%", position: "absolute", top: 0, bottom: 0, right: 0, left: 0, opacity: 1 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", msTransform: "translate(-50%, -50%)" }}>
                    <p className="eventdetailsP">Some Event </p>
                    <p className="eventdetailsP">28 JAN, 2020</p>
                </div>
            </div>
            </Slide>

        </Paper>
    </Grid>
}

export const EventsList = () => <Grid align="center" container item xs={12} spacing={4}>
    <EventTab />
    <EventTab />
    <EventTab />
    <EventTab />
</Grid>
