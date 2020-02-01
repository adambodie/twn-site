import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Button } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        padding: '20px'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
})

export default function Products() {
    const data = useStaticQuery(graphql`
        query ProductsQuery {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                        name
                        id
                        bio
                    }
                }
            }
        }
    }
    `)
    const classes = useStyles()
    return (
        <Layout>
            <SEO title='Our Products' />
            <h1>Our Products</h1>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <ul>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <li key={node.frontmatter.id} className={classes.staff}>
                            <h1>{node.frontmatter.name}</h1>
                            <p>{node.frontmatter.bio}</p>
                            <Button variant="contained" color="primary"><Link to={`/${node.frontmatter.name.toLowerCase()}`} className={classes.link}>Click Here</Link></Button>
                        </li>
                    ))}
                  </ul>
                </Grid>
            </Grid>
        </Layout>
    )
}