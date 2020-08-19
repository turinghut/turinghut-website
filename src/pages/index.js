import React from 'react'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core'
import Landing from '../components/landing'
import HamburgerMenu from "../components/hamburger-menu"
import Statistics from '../components/Statistics/statistics';
import VisionMissionComponent from '../components/vision-mission-component'
import Footer from '../components/footer/footer'
import TeamMember from '../components/TeamMembers/team-member';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

 const IndexPage = () => (
   <ThemeProvider theme={theme}>
    <HamburgerMenu/>
    <Landing />
    <VisionMissionComponent />
    <Statistics />
    <TeamMember />
    <Footer />
  </ThemeProvider>
)

export default IndexPage
