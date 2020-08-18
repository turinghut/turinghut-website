import React from 'react';
import {
  Grid, Typography, Card, CardActionArea, CardMedia
} from '@material-ui/core';
import TeamMembersData from "../../assets/TeamMembersData.json";
import teamMemberStyles from "./team-member-style";
import DialogDisplay from './team-member-dialog-display';
const team = TeamMembersData.members;

export default function TeamMember() {
  const classes = teamMemberStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.heading}>our team</Typography>
      <div className={classes.root}>
        <Grid container spacing={4} className={classes.gridContainer}>
          {team.map((member, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card className={classes.card}>
                <CardActionArea >
                  <CardMedia className={classes.media} image={member.imageUrl} title={member.name} />
                  <DialogDisplay person={member} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
