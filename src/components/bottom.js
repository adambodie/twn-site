import React from 'react';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import PeopleIcon from '@material-ui/icons/People'
import { Link } from 'gatsby'

const useStyles = makeStyles({
    root: {
        background: '#143296', 
        color: 'white', 
        position: 'sticky',
        bottom: '0', 
        width: '100%'
    },
    link: {
        color: 'white'
    }
})

export default function Bottom() {
    const classes = useStyles()
    return (
        <Hidden mdUp>
            <BottomNavigation className={classes.root}>
                <BottomNavigationAction label="Home" icon={<Link to='/'><HomeIcon className={classes.link}/></Link>} />
                <BottomNavigationAction label="About" icon={<Link to='/about/'><InfoIcon className={classes.link}/></Link>} />
                <BottomNavigationAction label="Questions" icon={<Link to='/contact/'><ContactSupportIcon className={classes.link}/></Link>} />
                <BottomNavigationAction label="Staff" icon={<Link to='/staff/'><PeopleIcon className={classes.link}/></Link>} />
            </BottomNavigation>
        </Hidden>
    )
}