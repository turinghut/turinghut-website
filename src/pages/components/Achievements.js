import React from 'react' ;
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid} from '@material-ui/core'
import * as icons from '@material-ui/icons'


export default function Achievements()
{
    
    let  TuringHutAchievements  = [
        {
            title:"Title",
            tagline:"tagline...",
            description:"Description...",
            date:"20 Jul 2020",  
            imageAddress:"https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
        },
        {
            title:"ACM ICPC 2019",
            tagline:"tagline...",
            description:"Description...", 
            date:"20 Jul 2020", 
            imageAddress:"https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
        },
        {
            title:"ACM ICPC 2019",
            tagline:"tagline...",
            description:"Description...",
            date:"20 Jul 2020",  
            imageAddress:"https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
        }
    ]
    return(
        <VerticalTimeline animate={true} >
            {TuringHutAchievements.map((eachAchievement)=>{
                return (
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0C251B', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #0C251B' }}
                date = {eachAchievement.date}
                iconStyle={{ background: '#0C251B', color: '#fff' ,                                                         }}
                icon = {<icons.Image />}
                
                > 
                <Grid
                container
                direction="row"
                justify="space-evenly"
                spacing= {3}
                >
                    <Grid xs={12} md={5} justify="flex-start" alignItems="center" container item style={{backgroundColor:""}} >
                    {/* Random Image */}
                    <img src= {eachAchievement.imageAddress}
                        style={{maxWidth:"160px", margin:"10px" , minHeight:"200px"}} ></img>
                    </Grid>
                    <Grid xs={12} md={7} container item justify="flex-start"  style={{backgroundColor:"" , marginBottom:"10px", color:"#fff" }}> 
                          <ul style={{listStyle:"none" , padding:"0px" }}>
                           <li><h3 className="vertical-timeline-element-title">{eachAchievement.title}</h3></li>
                           <li><h5 className="vertical-timeline-element-subtitle">{eachAchievement.tagline}</h5></li> 
                           <li><p>{eachAchievement.description}</p></li>
                          </ul>                      
                            
                    </Grid>
                </Grid>
                
               
            </VerticalTimelineElement>
                ) ;
            })}
        </VerticalTimeline>
    )
}