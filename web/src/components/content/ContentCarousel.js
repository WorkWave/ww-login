import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-material-ui-carousel"

import { Grid, Button, Typography } from "@mui/material"

const Slide = ({ slide }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 1 }}
    >
      <GatsbyImage
        image={slide.contentImage.asset?.gatsbyImageData}
        alt="chart"
        style={{ borderRadius: "10px", maxHeight: "65vh" }}
      />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          m: 2,
          color: "#19305A",
          fontWeight: 700,
        }}
      >
        {slide.contentHeader}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#19305A",
          mb: 1,
          maxWidth: "75%",
        }}
      >
        {slide.contentText}
      </Typography>

      <a
        href={slide.ctaLink}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" color="primary">
          {slide.ctaText}
        </Button>
      </a>
    </Grid>
  )
}

export const ContentCarousel = ({ carouselArray }) => {
  const [carouselOptions, setCarouselOptions] = useState({
    autoPlay: true,
    animation: "slide",
    indicators: true,
    timeout: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: true,
  })

  useEffect(() => {
    if (carouselArray.length === 1) {
      setCarouselOptions({
        ...carouselOptions,
        navButtonsAlwaysInvisible: true,
        indicators: false,
      })
    }
  }, [carouselArray])
  return (
    <Carousel
      autoPlay={carouselOptions.autoPlay}
      animation={carouselOptions.animation}
      indicators={carouselOptions.indicators}
      timeout={carouselOptions.timeout}
      navButtonsAlwaysVisible={carouselOptions.navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={carouselOptions.navButtonsAlwaysInvisible}
    >
      {carouselArray.map((slide, index) => (
        <Slide slide={slide} key={index} />
      ))}
    </Carousel>
  )
}
