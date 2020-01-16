import React from 'react';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import PeopleIcon from '@material-ui/icons/People'
import { Link } from 'gatsby'
export default function bottomNavigation() {
  return (
    <Hidden mdUp>
    <BottomNavigation style={{'background': '#143296', 'color': 'white'}}>
      <BottomNavigationAction label="Home" icon={<Link to='/'><HomeIcon style={{'color': 'white'}}/></Link>} />
      <BottomNavigationAction label="About" icon={<Link to='/page-2/'><InfoIcon style={{'color': 'white'}}/></Link>} />
      <BottomNavigationAction label="Questions" icon={<Link to='/page-2/'><ContactSupportIcon style={{'color': 'white'}}/></Link>} />
      <BottomNavigationAction label="Staff" icon={<Link to='/page-2/'><PeopleIcon style={{'color': 'white'}}/></Link>} />
    </BottomNavigation>
    </Hidden>
  );
}