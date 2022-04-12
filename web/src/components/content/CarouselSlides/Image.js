import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

export const Image = ({ contentImage, slide }) => {
  return contentImage.asset.gatsbyImageData.images?.sources.length ? (
    <img src={slide.contentImage.asset.url} alt="chart" />
  ) : (
    <GatsbyImage
      image={contentImage?.asset?.gatsbyImageData}
      alt="chart"
      imgStyle={{ objectFit: "contain" }}
      style={{
        borderRadius: "10px",
      }}
    />
  )
}
