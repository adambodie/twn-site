import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
        },
        minHeight: '500px'
    }
}))


export default function Contact() {
    const classes = useStyles()
    return (
        <Layout>
            <SEO title='Contact Us' />
            <h1>Contact Us!</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained" color="primary">Primary</Button>
            </form>
        </Layout>
    )
}
