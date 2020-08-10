import React from 'react'

import Typography from '@material-ui/core/Typography'
import footerStyles from './footer-styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Map, GitHub, Instagram, Email, LocalPhone } from '@material-ui/icons'

import FooterItem from './footer-item'

const footerItems = [
  {
    title: 'Find us on Maps',
    icons: [
      {
        title: 'Maps',
        icon: <Map />,
        route: 'https://goo.gl/maps/KbMkmqUWmUVQpfCv9',
      },
    ],
  },
  {
    title: 'Contact us',
    icons: [
      {
        title: 'Email',
        icon: <Email />,
        route: 'mailto:turinghut@vnrvjiet.in',
      },
      {
        title: 'Phone',
        icon: <LocalPhone />,
        route: 'tel: 040-2304-2760',
      },
    ],
  },
  {
    title: 'Follow us',
    icons: [
      {
        title: 'Github',
        icon: <GitHub />,
        route: 'https://github.com/turinghut',
      },
      {
        title: 'instagram',
        icon: <Instagram />,
        route: 'https://www.instagram.com/turing.hut/',
      },
    ],
  },
]

const Footer = () => {
  const styles = footerStyles()
  return (
    <footer className={styles.footer}>
      <Paper className={styles.paper}>
        <Grid container spacing={2} justify="center" alignItems="center">
          {footerItems.map((item, key) => (
            <FooterItem name={item.title} icons={item.icons} />
          ))}
          <Grid item xs={12}>
            <Typography component="paragraph">
              Developed by Turing Hut, VNR VJIET
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  )
}

export default Footer
