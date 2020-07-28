import React from 'react'

import Typography from '@material-ui/core/Typography'
import footerStyles from './footer-styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  Map,
  GitHub,
  Facebook,
  Instagram,
  Email,
  LocalPhone,
} from '@material-ui/icons'

import FooterItem from './footer-item'

const footerItems = [
  {
    title: 'Find us on Maps',
    icons: [
      {
        title: 'Maps',
        icon: <Map />,
        route: 'www.google.com',
      },
    ],
  },
  {
    title: 'Contact us',
    icons: [
      {
        title: 'Email',
        icon: <Email />,
        route: 'www.google.com',
      },
      {
        title: 'Phone',
        icon: <LocalPhone />,
        route: 'www.google.com',
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
        title: 'facebook',
        icon: <Facebook />,
        route: '#', //replace with facebook link
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
          {footerItems.map(item => (
            <FooterItem name={item.title} icons={item.icons}></FooterItem>
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
