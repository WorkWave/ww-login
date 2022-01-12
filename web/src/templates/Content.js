import React from "react"
import { graphql } from "gatsby"

import { Box } from "@mui/material"

import Layout from "../components/layout"
import { ContentCarousel } from "../components/content/ContentCarousel"

export default function Content({ data: { content } }) {
  return (
    <Layout>
      <ContentCarousel carouselArray={content.content} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    content: sanityLoginContent(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      metaTitle
      metaDescription
      content {
        contentImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 400
              width: 900
              placeholder: BLURRED
            )
          }
        }
        contentHeader
        contentText
        ctaText
        ctaLink
      }
    }
  }
`
