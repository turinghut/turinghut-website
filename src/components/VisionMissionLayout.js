import React from "react"
import {Typography, makeStyles } from "@material-ui/core"
import './VisionMissionStyles.css'

const useStyles = makeStyles({
  title: {
    fontFamily: "'Catamaran', sans-serif",
    textTransform: "uppercase",
  },
  body: {
    fontFamily: "'Roboto', sans-serif", 
    fontSize: 14,
  },
  border: {
    display: "block",
    borderBottom: "8px solid black",
    }
});

export default function VisionMissionLayout(props) {

  const classes = useStyles();

  return (
    <div className="layout">
        <div className="title">
            <div><Typography variant="h1" className={classes.title}>{props.title}</Typography></div>
        </div>
        <div className={classes.border}></div>
        <div className="body">
            <div><Typography variant="caption" className={classes.body}>{props.body}</Typography></div>
        </div>
    </div>
  );
  
}
