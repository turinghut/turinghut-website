import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import TuringhutLogo from '../assets/TuringhutLogo.svg'

export default function LandingComponent() {
  return (
    <Grid
      container
      direction="row-reverse"
      justify="space-around"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid xs={10} md={4} justify="center" container item>
        <TuringhutLogo style={{ maxWidth: '100%' }} />
      </Grid>

      <Grid xs={10} md={4} item>
        <Typography variant="h4" align="center">
          We are a group of people working together for the improvement of
          programming culture in VNRVJIET
        </Typography>
      </Grid>
    </Grid>
  )
}
