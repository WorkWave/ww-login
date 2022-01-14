import React from "react"
import { graphql } from "gatsby"

import { ContentCarousel } from "../components/content/ContentCarousel"

export default function Content({ data: { content } }) {
  return (
    <>
      <div style={{ marginTop: "5%" }}>
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
            gatsbyImageData(
              layout: CONSTRAINED
              # height: 600
              # width: 1000
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
