import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import './VisionMissionStyles.css'

const useStyles = makeStyles({
  '@keyframes showTopText': {
    '0%': { transform: 'translate(0, 100%)' },
    '100%': { transform: 'translate(0, 0)' },
  },

  '@keyframes showBottomText': {
    '0%': { transform: 'translate(0, -100%)' },
    '100%': { transform: 'translate(0, 0)' },
  },

  title: {
    fontFamily: "'Catamaran', sans-serif",
    textTransform: 'uppercase',
    bottom: 0,
    animation: '$showTopText 1s 0.25s forwards',
    transform: 'translate(0, 100%)',
  },

  body: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 15,
    top: 0,
    animation: '$showBottomText 1s 0.25s forwards',
    transform: 'translate(0, -100%)',
    paddingTop: '2vmin',
  },

  border: {
    display: 'block',
    borderBottom: '5px solid black',
  },

  titleDiv: {
    top: 0,
  },

  bodyDiv: {
    bottom: 0,
  },

  layout: {
    '& div': {
      height: '50%',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    },
  },
})

export default function VisionMissionLayout({ title, body }) {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <div className={classes.titleDiv}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      </div>
      <div className={classes.border} />
      <div className={classes.bodyDiv}>
        <Typography variant="body1" className={classes.body}>
          {body}
        </Typography>
      </div>
    </div>
  )
}
