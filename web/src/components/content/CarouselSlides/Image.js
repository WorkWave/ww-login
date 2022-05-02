import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

//gatsby image can't work with svgs. ternary allows rendering of any image type
// 5/2 update with gif. needs to be fixed with ternary added

export const Image = ({ contentImage }) => {
  return (
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
