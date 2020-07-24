import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Typography, Dialog, Card, CardActionArea, CardMedia, CardActions
} from '@material-ui/core';
import data from "../assets/TeamMembersData.json";
import styles from "./TeamMembersLayout";
const useStyles=makeStyles((theme)=>(styles(theme)));
const team = data.members;

export default function TeamMemberComponent() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const unknown = "Unknown";
  const [phone, setPhone] = useState(unknown);
  const [email, setEmail] = useState(unknown);
  const [github, setGithub] = useState(unknown);
  const [linkedin, setLinkedin] = useState(unknown);
  const handleOpen = (data) => {
    setOpen(true);
    if (data != undefined) {
      setIndex(data);
      if (team[data].phonenNo !== undefined)
        setPhone(team[data].phonenNo);
      if (team[data].emailid !== undefined)
        setEmail(team[data].emailid);
      if (team[data].githublink !== undefined)
        setGithub(team[data].githublink);
      if (team[data].linkedin !== undefined)
        setLinkedin(team[data].linkedin);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPhone(unknown);
    setEmail(unknown);
    setGithub(unknown);
    setLinkedin(unknown);
  };

  return (
    <div>
      <Card>
        <Typography variant="h3" className={classes.heading}>our team</Typography>
        <div className={classes.root}>
          <Grid container spacing={4} className={classes.gridContainer}>
            {team.map((tile, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea >
                    <CardMedia className={classes.media} image={tile.img} title={tile.name} />
                    <div className={[classes.tilebar, classes.tilebarRootTitle, classes.tilebarBottom].join(" ")}>
                      <div className={[classes.titlePosRight, classes.titleWrap].join(" ")}>
                        <div className={classes.title}>{tile.name}</div>
                        <div><span>{tile.designation}</span></div>
                      </div>
                      <CardActions onClick={() => handleOpen(i)} className={classes.actionItem}>i</CardActions>
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
                          <h1 id="transition-dialog-title" className={classes.dialogHeading}>{team[index].name}</h1>
                          <h2 id="transition-dialog-title"><span>Phone: {phone}</span></h2>
                          <h2 id="transition-dialog-title"><span>Email: {email}</span></h2>
                          <h2 id="transition-dialog-title"><span>Github: {github}</span></h2>
                          <h2 id="transition-dialog-title"><span>LinkedIn: {linkedin}</span></h2>
                        </div>
                      </Dialog>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </div>
  );
}