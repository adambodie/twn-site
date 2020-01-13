import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { CssBaseline, Container } from '@material-ui/core'
import Header from './header'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
`)
    return (
        <>
            <CssBaseline />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container maxWidth='lg'>
                <main>{children}</main>
            </Container>
            <footer> © Adam Bodie {new Date().getFullYear()}</footer>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout