import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        background: `#143296`,
        flexGrow: 1,
    },
    padding: {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
    },
    title: {
        margin: 0,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}))

export default function Header({siteTitle}){
    const classes = useStyles() 
    return(
        <>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={`/icons/icon-48x48.png`} alt='logo' />
                </IconButton>
                <Typography variant="h6" className={classes.title}>{siteTitle}</Typography>
            </Toolbar>
        </AppBar>
        <Navbar />
        </>
    )
}
Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}