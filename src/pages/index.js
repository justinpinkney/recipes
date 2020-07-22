import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      
      <ul>
      {posts.map(({ node }) => {
        const title = node.headings[0].value
        return (
              <li key={node.fields.slug}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </li>
        )
      })}
       </ul>
       
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`
