import React from 'react'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core'
import Landing from '../components/landing'
// <<<<<<< master
// import Fullpagemenu from "../components/fullpagemenu"
// const IndexPage = () => (
//   <div>
//     <Fullpagemenu/>
// =======
// import Statistics from '../components/Statistics/statistics';
// import VisionMissionComponent from '../components/vision-mission-component'
// import Footer from '../components/footer/footer'


// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

// const IndexPage = () => (
//   <ThemeProvider theme={theme}>
// >>>>>>> master
    <Landing />
    <VisionMissionComponent />
    <Statistics />
    <Footer />
  </ThemeProvider>
)

export default IndexPage
