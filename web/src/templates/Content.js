import React from "react"
import { graphql } from "gatsby"

import { ContentCarousel } from "../components/content/ContentCarousel"

export default function Content({ data: { content } }) {
  return (
    <>
      <div>
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
        wistiaUrl
        contentHeader
        contentText
        ctaText
        ctaLink
      }
    }
  }
`
