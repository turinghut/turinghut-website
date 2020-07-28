import React, { useState } from 'react';
import {
  Grid, Typography, Dialog, Card, CardActionArea, CardMedia, CardActions
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import TeamMembersData from "../assets/TeamMembersData.json";
import teamMemberStyles from "./TeamMemberStyle";
import DialogDisplay from './TeamMemberDialogDisplay';
const team = TeamMembersData.members;

export default function TeamMember() {
  const classes = teamMemberStyles();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const handleOpen = (data) => {
    setOpen(true);
    if (data != undefined) {
      setIndex(data);
    }
  };

  return (
    <div>
      <Typography variant="h3" className={classes.heading}>our team</Typography>
      <div className={classes.root}>
        <Grid container spacing={4} className={classes["grid-container"]}>
          {team.map((member, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card className={classes.card}>
                <CardActionArea >
                  <CardMedia className={classes.media} image={member.imageUrl} title={member.name} />
                  <div className={[classes.tilebar, classes["tilebar-root-title"], classes["tilebar-bottom"]].join(" ")}>
                    <div className={[classes["title-pos-right"], classes["title-wrap"]].join(" ")}>
                      <div className={classes.title}>{member.name}</div>
                      <div><span>{member.designation}</span></div>
                    </div>
                    <CardActions onClick={() => handleOpen(i)} className={classes["action-item"]}><Info /></CardActions>
                    <DialogDisplay indexSet={index} isOpenDialog={open} closeDialog={() => { setOpen(false) }} />
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}