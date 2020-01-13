import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//import Image from '../components/image'

const useStyles = makeStyles(theme => ({
  root: {
    background: `#143296`
  },
  padding: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  title: {
    margin: 0,
  }
}));

//TODO: Create Header with Logo and Title on same line
export default function Header({siteTitle}){
    const classes = useStyles() 
    return(
        <header className={classes.root} >
            <div className={classes.padding}>
                {/*<Image />*/}
                <h1 className={classes.title}>{siteTitle}</h1>
            </div>
        </header>
      )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}