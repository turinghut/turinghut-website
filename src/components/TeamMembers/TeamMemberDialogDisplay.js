import React, { useState } from 'react';
import { Dialog, Typography, CardActions } from '@material-ui/core';
import teamMemberStyles from "./TeamMemberStyle";
import { LinkedIn, Mail, GitHub, LocalPhone, Info } from '@material-ui/icons';

const DialogDisplay = ({ person: { name, designation, phoneNumber, emailId, githubProfile, linkedinProfile } }) => {
    const classes = teamMemberStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className={`${classes.tilebar} ${classes.tilebarRootTitle} ${classes.tilebarBottom}`}>
            <div className={`${classes.titlePosRight} ${classes.titleWrap}`}>
                <div className={classes.title}>{name}</div>
                <div><span>{designation}</span></div>
            </div>
            <CardActions onClick={() => setOpen(true)} className={classes.actionItem}><Info /></CardActions>
            <Dialog
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <div className={classes.paper}>
                    {name ? <Typography variant="h4" className={classes.dialogHeading}>{name}</Typography> : null}
                    {phoneNumber ? <Typography variant="h5" className={classes.dialogContent}><LocalPhone /> {phoneNumber}</Typography> : null}
                    {emailId ? <Typography variant="h5" className={classes.dialogContent}><Mail /> {emailId}</Typography> : null}
                    {githubProfile ? <a href={githubProfile} alt={"githubProfile"} ><GitHub className={classes.githubIcon} /></a> : null}
                    {linkedinProfile ? <a href={linkedinProfile} alt={"linkedinProfile"}><LinkedIn className={classes.linkedinIcon} /></a> : null}
                </div >
            </Dialog>
        </div>
    )
}

export default DialogDisplay
