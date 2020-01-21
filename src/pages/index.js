import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid } from '@material-ui/core'
import hands from '../images/hands.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop: '20px',
    width: '100%',
    height: '200px',
  }
}));

export default function IndexPage() {
    const classes = useStyles()
    return (
        <Layout>
            <SEO title='Home' />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <img className={classes.image} src={hands} alt='hands' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit quam et mollis placerat. Aenean ac commodo arcu. Suspendisse sit amet molestie nisi. Praesent eu aliquam mi, ac fermentum lorem. Ut interdum eleifend diam, id porttitor leo rutrum ac. Integer molestie elementum ultrices. Sed sed tempus turpis. Sed finibus orci vitae justo commodo, in egestas mauris sodales. Maecenas tempus sed urna in convallis. Aenean consequat enim augue, ac porttitor lorem tempus ut. Vivamus quis lobortis ipsum. Fusce varius sapien quis enim volutpat finibus. Pellentesque nisi tellus, egestas sed eros et, pulvinar rhoncus turpis. Cras ac ultrices lacus. Nulla bibendum tortor et consectetur faucibus.</p>
                </Grid>
            </Grid>
        </Layout>
    )
}

