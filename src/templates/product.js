import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid } from '@material-ui/core'

export default ({ data }) => {
    const product = data.markdownRemark
    return (
        <Layout>
            <SEO title={product.frontmatter.name} />
            <h1>{product.frontmatter.name}</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{background: 'blue', width: '350px', height: '350px'}}></div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>{product.frontmatter.bio}</p>
                    <p><strong>Price:</strong> ${product.frontmatter.price}</p>
                </Grid>
            </Grid>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        bio
        price
      }
    }
  }
`