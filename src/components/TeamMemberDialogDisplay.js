import React from 'react';
import { Dialog, Typography } from '@material-ui/core';
import TeamMembersData from "../assets/TeamMembersData.json";
import teamMemberStyles from "./TeamMemberStyle";
import { LinkedIn, Mail, GitHub, LocalPhone } from '@material-ui/icons';
const data = TeamMembersData.members;
const DialogDisplay = ({ indexSet, isOpenDialog, closeDialog }) => {
    const classes = teamMemberStyles();
    return (
        <Dialog
            aria-labelledby="simple-dialog-title"
            aria-describedby="simple-dialog-description"
            open={isOpenDialog}
            onClose={closeDialog}
            BackdropProps={{
                classes: {
                    root: classes.backdrop
                }
            }}
        >
            <div className={classes.paper}>
                {data[indexSet].name ? <Typography variant="h4" className={classes["dialog-heading"]}>{data[indexSet].name}</Typography> : null}
                {data[indexSet].phoneNumber ? <Typography variant="h5" className={classes["dialog-content"]}><LocalPhone /> {data[indexSet].phoneNumber}</Typography> : null}
                {data[indexSet].emailId ? <Typography variant="h5" className={classes["dialog-content"]}><Mail /> {data[indexSet].emailId}</Typography> : null}
                {data[indexSet].githubProfile ? <a href={data[indexSet].githubProfile} alt={"githubProfile"} ><GitHub className={classes["github-icon"]} /></a> : null}
                {data[indexSet].linkedinProfile ? <a href={data[indexSet].linkedinProfile} alt={"linkedinProfile"}><LinkedIn className={classes["linkedin-icon"]} /></a> : null}
            </div >
        </Dialog>
    )
}

export default DialogDisplay