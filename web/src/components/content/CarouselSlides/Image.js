import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

//gatsby image can't work with svgs. ternary allows rendering of any image type
// this component typically has gatsby image data for performance reasons. when we're using a gif, it seems to break styling. readd ternary when gifs are fixed

export const Image = ({ contentImage }) => {
  return (
    <img
      src={contentImage.asset.gatsbyImageData?.images.fallback?.src}
      alt="chart"
      style={{ borderRadius: "8px", maxWidth: "569px", maxHeight: "400px" }}
    />
  )
}
