import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
        },
        minHeight: '500px'
    },
    fieldset: {
        background: 'white'
    }
}))


export default function Contact() {
    const classes = useStyles()
    return (
        <Layout>
            <SEO title='Contact Us' />
            <h1>Contact Us!</h1>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} md={6}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className={classes.fieldset} id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField className={classes.fieldset} id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField className={classes.fieldset} id="outlined-basic" label="Outlined" variant="outlined" />
                        <Button variant="contained" color="primary">Primary</Button>
                    </form>
                </Grid>
            </Grid> 
        </Layout>
    )
}
