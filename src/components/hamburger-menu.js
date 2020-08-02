import React, { useState } from "react"
import styled,{createGlobalStyle} from "styled-components"

const Global = createGlobalStyle`
body,html{
    margin:0;  
    padding:0;
    overflow-x:hidden;
}
`
const MenuIcon=styled.button`
position:fixed;
top:2rem;
left:2rem;
display:flex;
flex-direction:column;
justify-content:space-around;
height:1.5rem;
background:transparent;
border:none;
cursor:pointer;
outline:none;
z-index:5;
div{
    width:1.5rem;
    height:0.3rem;
    background: black;
    border-radius:5px;
    transform-origin:1px;
    position:relative;
    transition :opacity 300ms ,transform 300ms;  
    :first-child{
         transform: ${({nav}) => (nav?"rotate(45deg)":"rotate(0)")}
    }
    :nth-child(2){
        opacity: ${({nav})=>(nav ?"0":"1")};
    }
    :nth-child(3){
         transform: ${({nav}) => (nav?"rotate(-45deg)":"rotate(0)")}
    }

    }
    
}
`
const MenuLinks=styled.nav `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:100vh;
width:100%;
background:#393E46;
position:absolute;
top:0;
right:0;
transition:transform 300ms;
transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)"  )};
  
ul{
    list-style-type:none; 
}
li{
    margin-top:1rem;
}
a{
    text-decoration:none;
    color:black;
    font-size:1.5rem;
    transition: color 300ms;
    :hover{
        color:#76EAD7;
    }
}
`

export default function Header() {
    const [nav,showNav]=useState(false)
    return (
          <>
            <Global/>
            <MenuIcon nav={nav} onClick={()=> showNav(!nav)}>
                 <div/>
                 <div/>
                 <div/>
            </MenuIcon>
            <MenuLinks nav={nav}>
                <ul>
                   <li>
                       <a href="#">Home</a>
                   </li> 
                   <li>
                       <a href="#">About Us</a>
                   </li> 
                   <li>
                       <a href="#">Achievements</a>
                   </li> 
                   <li>
                       <a href="#">Team</a>
                   </li> 
                   <li>
                       <a href="#">Events</a>
                   </li> 
                </ul>
            </MenuLinks>
       </>
    )
  }