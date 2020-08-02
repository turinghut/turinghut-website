import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const FooterItem = ({ name, icons }) => {
  return (
    <Grid item xs={4}>
      <Typography variant="h6" component="h6">
        {name}
      </Typography>
      <IconList icons={icons}></IconList>
    </Grid>
  )
}

const IconList = props => {
  return (
    <Grid container spacing={1}>
      {props.icons.map(({ title, icon, route }) => (
        <Grid item xs>
          <a href={route} alt={title}>
            <IconButton
              style={{
                borderRadius: '50%',
                backgroundColor: 'primary',
              }}
            >
              {icon}
            </IconButton>
          </a>
        </Grid>
      ))}
    </Grid>
  )
}
export default FooterItem
