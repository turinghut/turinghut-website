import React from 'react'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core'
import Landing from '../components/landing'
import VisionMissionComponent from '../components/vision-mission-component'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Landing />
    <VisionMissionComponent />
  </ThemeProvider>
)

export default IndexPage
