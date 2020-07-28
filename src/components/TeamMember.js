import React, { useState } from 'react';
import {
  Grid, Typography, Dialog, Card, CardActionArea, CardMedia, CardActions
} from '@material-ui/core';
import { LinkedIn, Mail, GitHub, LocalPhone, Info } from '@material-ui/icons';
import data from "../assets/TeamMembersData.json";
import teamMemberStyles from "./TeamMemberStyle";
const team = data.members;

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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h3" className={classes.heading}>our team</Typography>
      <div className={classes.root}>
        <Grid container spacing={4} className={classes["grid-container"]}>
          {team.map((tile, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card className={classes.card}>
                <CardActionArea >
                  <CardMedia className={classes.media} image={tile.imageUrl} title={tile.name} />
                  <div className={[classes.tilebar, classes["tilebar-root-title"], classes["tilebar-bottom"]].join(" ")}>
                    <div className={[classes["title-pos-right"], classes["title-wrap"]].join(" ")}>
                      <div className={classes.title}>{tile.name}</div>
                      <div><span>{tile.designation}</span></div>
                    </div>
                    <CardActions onClick={() => handleOpen(i)} className={classes["action-item"]}><Info /></CardActions>
                    <Dialog
                      aria-labelledby="simple-dialog-title"
                      aria-describedby="simple-dialog-description"
                      open={open}
                      onClose={handleClose}
                      BackdropProps={{
                        classes: {
                          root: classes.backdrop
                        }
                      }
                      }
                    >
                      <div className={classes.paper}>
                        <Typography variant="h4" className={classes["dialog-heading"]}>{team[index].name}</Typography>
                        <Typography variant="h5" className={classes["dialog-content"]}><LocalPhone /> {team[index].phoneNumber}</Typography>
                        <Typography variant="h5" className={classes["dialog-content"]}><Mail /> {team[index]["emailId "]}</Typography>
                        <a href={team[index].githubProfile} alt={"githubProfile"} ><GitHub className={classes["github-icon"]} /></a>
                        <a href={team[index].linkedinProfile} alt={"linkedinProfile"}><LinkedIn className={classes["linkedin-icon"]} /></a>
                      </div>
                    </Dialog>
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