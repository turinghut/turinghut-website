import React, { useState } from "react"
import { Grid, Paper, Slide } from '@material-ui/core'
import "./EventStyles.css";
import {allEvents} from "./EventsData";
import Typography from '@material-ui/core/Typography';

const EventTab = (props) => {
    const [slideIn, setSlideIn] = useState(false);

    return <Grid conatiner item xs={3} className="eventTab" >
        <Paper elevation={6} className="eventPaper">
            <img className="eventImage" onClick={() => { setSlideIn(!slideIn) }} src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/s720x720/95913397_2869811633133317_2388660278012149760_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeE57UuBajJ7IzxJelCrb2vZh6YYytGVFjiHphjK0ZUWOOIOz73a2yHNddE8sqtkZDk&_nc_oc=AQlfv8OBWNuJ8hvASPxNjp-dfGr85BngsKDxe488kdVlnaJ5CUQxwjE7Lgi7ZFvqP--ek6z2ufC1cYgo7XVrF0Fx&_nc_ht=scontent.fymy1-1.fna&_nc_tp=7&oh=84cf1db715d8c8217c5921e9ed056a6b&oe=5F303002" />

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
    {allEvents.map((data)=><EventTab data={data}/>)}
</Grid>
