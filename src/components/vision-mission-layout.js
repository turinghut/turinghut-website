import React, {useRef, useState} from 'react'
import { Typography, makeStyles } from '@material-ui/core'

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
    fontWeight: "bold",
    textTransform: 'uppercase',
    bottom: 0,
    transform: 'translate(0, 100%)',
  },

  animTitle: {
    animation: '$showTopText 1s 0.15s forwards',
  },

  body: {
    fontSize: 15,
    top: 0,
    transform: 'translate(0, -100%)',
    paddingTop: '2vmin',
  },

  animBody: {
    animation: '$showBottomText 1s 0.25s forwards',
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
    paddingBottom: "2vmin",
  },
})

export default function VisionMissionLayout({ title, body }) {
  const classes = useStyles();
  const refLayout = useRef(null);
  const [titleAnimation, setTitleAnimation] = useState(null);
  const [bodyAnimation, setBodyAnimation] = useState(null);

  window.addEventListener("scroll", (e)=>{
    const offset = refLayout.current.offsetTop*(30/100)
    if(document.documentElement.scrollTop > offset){
      setTitleAnimation(classes.animTitle);
      setBodyAnimation(classes.animBody);     
    }
  })

  return (
    <div className={classes.layout} ref={refLayout}>
      <div className={classes.titleDiv}>
        <Typography variant="h2" className={`${classes.title} ${titleAnimation}`}>
          {title}
        </Typography>
      </div>
      <div className={classes.border} />
      <div className={classes.bodyDiv}>
        <Typography variant="body1" className={`${classes.body} ${bodyAnimation}`}>
          {body}
        </Typography>
      </div>
    </div>
  )
}
