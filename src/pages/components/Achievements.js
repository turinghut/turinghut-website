import React from 'react' ;
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid , Typography} from '@material-ui/core'
import * as icons from '@material-ui/icons'
import TuringHut from './data.json' 
import "./style.css" ; 
export default function Achievements()
{
    
   
    return(
        <div className = "AchievementDiv scroller-notrack" >
            <VerticalTimeline animate={true}   >
            {TuringHut.TuringHutAchievements.map((achievement)=>{
                return (
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0C251B', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #0C251B' }}
                date = {achievement.date}
                iconStyle={{ background: '#0C251B', color: '#fff' ,                                                         }}
                icon = {<icons.Group  />}
                
                > 
                <Grid
                container
                direction="row"
                justify="space-evenly"
                spacing= {3}
                >
                    <Grid xs={12} md={5} justify="flex-start" alignItems="center" container item style={{backgroundColor:""}} >
                    <img src= {achievement.imageUrl}
                        style={{maxWidth:"130px", margin:"10px", mixHeight:"200px"}} ></img>
                    </Grid>
                    <Grid xs={12} md={7} container item justify="flex-start"  style={{ marginBottom:"10px", color:"#fff" }}> 
                          <ul style={{listStyle:"none" , padding:"0px" }}>
                           <li><Typography variant='h4' component="h3" className= "vertical-timeline-element-title" >{achievement.title}</Typography></li>
                           
                           <li><Typography variant='h7' component="h7" className= "vertical-timeline-element-title">{achievement.tagline}</Typography></li> 
                           <li><Typography variant='p' className= "vertical-timeline-element-title" component ="p">{achievement.description}</Typography></li>
                          </ul>                      
                            
                    </Grid>
                </Grid>
                
               
            </VerticalTimelineElement>
                ) ;
            })}
        </VerticalTimeline>
        </div>
        
    )
}