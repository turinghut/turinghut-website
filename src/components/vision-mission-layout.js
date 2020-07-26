import React, {useRef} from 'react'
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
    fontFamily: "'Catamaran', sans-serif",
    textTransform: 'uppercase',
    bottom: 0,
    transform: 'translate(0, 100%)',
  },

  animTitle: {
    animation: '$showTopText 1s 0.25s forwards',
  },

  body: {
    fontFamily: "'Roboto', sans-serif",
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
  const classes = useStyles()
  const refTitle = useRef(null)
  const refBody = useRef(null)
  const refLayout = useRef(null)

  window.addEventListener("scroll", (e)=>{
    const offset = refLayout.current.offsetTop*(30/100)
    if(document.documentElement.scrollTop > offset){
      refTitle.current.classList.add(classes.animTitle)
      refBody.current.classList.add(classes.animBody)        
    }
  })

  return (
    <div className={classes.layout} ref={refLayout}>
      <div className={classes.titleDiv}>
        <Typography variant="h2" className={classes.title} ref={refTitle}>
          {title}
        </Typography>
      </div>
      <div className={classes.border} />
      <div className={classes.bodyDiv}>
        <Typography variant="body1" className={classes.body} ref={refBody}>
          {body}
        </Typography>
      </div>
    </div>
  )
}
