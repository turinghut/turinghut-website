import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import TuringhutLogo from '../assets/TuringhutLogo.svg'

export default function Landing() {
  return (
    <div id="home">
    <Grid
      container
      direction="row-reverse"
      justify="space-around"
      alignItems="center"
      style={{ height: '100vh', padding: '0 5vw 0 5vw' }}
    >
      <Grid xs={12} md={5} justify="center" alignItems="center" container item>
        <TuringhutLogo style={{ maxWidth: '100%' }} />
      </Grid>
      <Grid xs={12} md={7} container item justify="center" alignItems="center">
        <Typography variant="h4" align="center">
          We are a group of people working together for the improvement of
          programming culture in VNRVJIET
        </Typography>
      </Grid>
    </Grid>
    </div>
  )
}
