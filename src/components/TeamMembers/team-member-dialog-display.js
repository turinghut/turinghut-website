import React, { useState } from 'react';
import { Dialog, CardActions, DialogContent, DialogContentText } from '@material-ui/core';
import teamMemberStyles from "./team-member-style";
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
                <DialogContent style={{minWidth:'38vh',minHeight:'25vh'}}>
                    {name ? <DialogContentText className={classes.dialogHeading}>{name}</DialogContentText> : null}
                    {phoneNumber ? <DialogContentText className={classes.dialogContent}><LocalPhone className={classes.icon}/> {phoneNumber}</DialogContentText> : null}
                    {emailId ? <DialogContentText className={classes.dialogContent}><Mail className={classes.icon}/> {emailId}</DialogContentText> : null}
                    {githubProfile ? <a href={githubProfile} alt={"githubProfile"} ><GitHub className={classes.githubIcon} /></a> : null}
                    {linkedinProfile ? <a href={linkedinProfile} alt={"linkedinProfile"}><LinkedIn className={classes.linkedinIcon} /></a> : null}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogDisplay
