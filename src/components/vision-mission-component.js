import React from 'react'
import {
  Grid,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core'
import VisionMissionLayout from './vision-mission-layout'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

export default function VisionMissionComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justify="space-around"
        style={{ height: '100vh' }}
        alignItems="center"
      >
        <Grid item container xs={10} sm={8} justify="flex-start">
          <Grid item xs={12} md={8}>
            <VisionMissionLayout
              title="vision"
              body="Act as platform of “unity” to promote the `cause` of Computer Science. Develop a sense of belongingness amongst the pupils in the `impact` being created by Computer Science and it’s applied concepts while appreciating its inter-disciplinary nature and recognizing the unique art of developing solutions through mathematical models evolving in scale to the emerging problems of the world today. And help explore knowledge, simulate study and research of and seek opportunities in Computer Science, with special regard given to Programming, as its members pave way for their career into the future."
            />
          </Grid>
        </Grid>
        <Grid item container xs={10} sm={8} justify="flex-end">
          <Grid item xs={12} md={8}>
            <VisionMissionLayout
              title="mission"
              body="The club shall work towards promoting the greater cause of Computer Science in the community by Orienting freshmen to the nature of Computer Science, organizing events, Creating awareness about the opportunities to expand their knowledge and showcase their skills. Uniting people with motivated interest to foster a culture of learning in the community with regards to Computer Science. Organizing Programming events at various tiers as deemed necessary on a continuous basis for all its members while training them in the underlying concepts, best coding practices and ethics; with an ultimate goal of promoting Competitive Programming under the motto `Programming as a Sport` and `The Art of Programming`."
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
