import React from "react"
import { graphql } from "gatsby"

import useMediaQuery from "@mui/material/useMediaQuery"

import { ContentCarousel } from "../components/content/ContentCarousel"

export default function Content({ data: { content } }) {
  // const md = useMediaQuery(theme => theme.breakpoints.down("md"))
  return (
    <>
      <div style={{ marginTop: "7vh" }}>
        <ContentCarousel carouselArray={content.content} />
      </div>
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
        contentHeader
        contentText
        ctaText
        ctaLink
      }
    }
  }
`
