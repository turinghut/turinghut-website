import React, { useState } from 'react';
import { Dialog, Typography, CardActions } from '@material-ui/core';
import teamMemberStyles from "./TeamMemberStyle";
import { LinkedIn, Mail, GitHub, LocalPhone, Info } from '@material-ui/icons';

const DialogDisplay = ({ person: { name, designation, phoneNumber, emailId, githubProfile, linkedinProfile } }) => {
    const classes = teamMemberStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className={`${classes.tilebar} ${classes.tilebar} ${classes["tilebar-root-title"]} ${classes["tilebar-bottom"]}`}>
            <div className={`${classes["title-pos-right"]} ${classes["title-wrap"]}`}>
                <div className={classes.title}>{name}</div>
                <div><span>{designation}</span></div>
            </div>
            <CardActions onClick={() => setOpen(true)} className={classes["action-item"]}><Info /></CardActions>
            <Dialog
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
                open={open}
                onClose={() => { setOpen(false) }}
                BackdropProps={{
                    classes: {
                        root: classes.backdrop
                    }
                }}
                PaperProps={{
                    style: {
                        boxShadow: 'none'
                    },
                }}
            >
                <div className={classes.paper}>
                    {name ? <Typography variant="h4" className={classes["dialog-heading"]}>{name}</Typography> : null}
                    {phoneNumber ? <Typography variant="h5" className={classes["dialog-content"]}><LocalPhone /> {phoneNumber}</Typography> : null}
                    {emailId ? <Typography variant="h5" className={classes["dialog-content"]}><Mail /> {emailId}</Typography> : null}
                    {githubProfile ? <a href={githubProfile} alt={"githubProfile"} ><GitHub className={classes["github-icon"]} /></a> : null}
                    {linkedinProfile ? <a href={linkedinProfile} alt={"linkedinProfile"}><LinkedIn className={classes["linkedin-icon"]} /></a> : null}
                </div >
            </Dialog>
        </div>
    )
}

export default DialogDisplay
