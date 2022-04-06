import React from "react"
import { graphql } from "gatsby"

import { ContentCarousel } from "../components/content/ContentCarousel"

import { Grid } from "@mui/material"

export default function Content({ data: { content } }) {
  return (
    <>
      <Grid style={{ height: "100vh" }}>
        <ContentCarousel carouselArray={content.content} />
      </Grid>
    </>
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        wistiaUrl
        contentHeader
        contentText
        ctaText
        ctaLink
      }
    }
  }
`
