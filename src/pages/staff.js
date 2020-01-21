import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Avatar } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    image: {
        background: '#143296',
        marginTop: '20px',
        width: '100%',
        height: '200px',
    },
    staff: {
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        padding: '20px'
    }
})


export default function Staff() {
    const classes = useStyles()
    return (
        <Layout>
            <SEO title='Our Staff' />
            <h1>Our Staff</h1>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <ul>
                    <li className={classes.staff}>
                  <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
                  <p className={classes.text}>Lorem ipsum dolor amet anim twee hashtag pinterest. Pinterest wolf YOLO brooklyn microdosing offal officia nulla health goth.</p>
                  </li>
                    <li className={classes.staff}>
                  <Avatar alt="Joe Bloggs" src="/static/images/avatar/2.jpg" />
                  <p className={classes.text}>Lorem ipsum dolor amet brooklyn vape dolor biodiesel. Echo park tilde tumeric post-ironic health goth austin photo booth.</p>
                  </li>
                    <li className={classes.staff}>
                  <Avatar alt="Ashok Kumar" src="/static/images/avatar/3.jpg" />
                  <p className={classes.text}>Lorem ipsum dolor amet cliche sint tumeric lorem, ut etsy consequat retro. In culpa distillery meggings quinoa vexillologist.</p>
                  </li>
                  </ul>
                </Grid>
            </Grid>
        </Layout>
    )
}
