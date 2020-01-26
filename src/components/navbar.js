import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Breadcrumbs } from '@material-ui/core'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'white',
        flexGrow: 1,
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: '#143296',
        padding: '10px',
        textDecoration: 'none',
        '&:hover': {   
            color: '#010063',
            background: '#eee'
        },
    }
}))

export default function Navbar({siteTitle}){
    const classes = useStyles() 
    return(
        <Breadcrumbs separator="|" aria-label="breadcrumb" className={classes.root}>
            <Link to='/' className={classes.link}>Home</Link>
            <Link to='/about' className={classes.link}>About</Link>
            <Link to='/contact' className={classes.link}>Contact</Link>
            <Link to='/staff' className={classes.link}>Staff</Link>
        </Breadcrumbs>
    )
}