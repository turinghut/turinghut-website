import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
   eventImage: {
    height: "80%",
    width: "100%"
  },
  
  upcomingEventTab: {
    bottom:"0",
    marginTop: "200px"
  },

  upcomingEventPaper: {
    position: "relative",
    width: "50%",
    overflow: "hidden"
  },
  
  upcomingEventTextOuter: {
  marginTop: "35%",
  backgroundColor: "white",
  height: "50%",
  width: "100%",
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0"
  },
  
  eventsComponent: {
    overflow: "hidden"
  },
  
  upcomingEventTextInner: {
    textAlign: "center",
    position: "absolute", 
    marginTop: "5%", 
    top: "0%",
    left: "50%", 
    transform: "translate(-50%, 0%)"
  },

  eventPaper: {
    position: "relative",
    overflow: "hidden"
  },

  details: {
    backgroundColor: "white",
    height: "100%",
    width: "100%", 
    position: "absolute",
    top: "0",
    bottom: "0", 
    right: "0",
    left: "0"
  },

  eventText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)"
  },
  
  upcomingEventImage: {
    height: "auto",
    width: "100%"
  }
  
  
})
);

export default styles;