import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

//gatsby image can't work with svgs. ternary allows rendering of any image type

export const Image = ({ contentImage }) => {
  return contentImage.asset.gatsbyImageData.images?.sources.length ? (
    <img src={contentImage.asset.url} alt="chart" />
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
