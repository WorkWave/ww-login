import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-material-ui-carousel"
import ReactPlayer from "react-player/wistia"

import { Grid, Button, Typography } from "@mui/material"

const Slide = ({ slide }) => {
  const {
    contentImage,
    wistiaUrl,
    contentHeader,
    contentText,
    ctaText,
    ctaLink,
  } = slide
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 0.5 }}
    >
      {contentImage ? (
        contentImage.asset.gatsbyImageData.images?.sources.length ? (
          <img src={slide.contentImage.asset.url} alt="image" />
        ) : (
          <GatsbyImage
            image={contentImage?.asset?.gatsbyImageData}
            alt="chart"
            style={{ borderRadius: "10px", maxHeight: "65vh" }}
          />
        )
      ) : (
        <div
          style={{
            position: "relative",
            paddingTop: "44.25%",
            minHeight: "70%",
            minWidth: "79%",
            border: "1px solid #d8dee0",
          }}
        >
          <ReactPlayer
            url={wistiaUrl}
            height="100%"
            width="100%"
            controls={true}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      )}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            m: 2,
            color: "#19305A",
            fontWeight: 700,
          }}
        >
          {contentHeader}
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
          {contentText}
        </Typography>

        <a
          href={ctaLink}
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary">
            {ctaText}
          </Button>
        </a>
      </Grid>
    </Grid>
  )
}

export const ContentCarousel = ({ carouselArray }) => {
  const [carouselOptions, setCarouselOptions] = useState({
    autoPlay: false,
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
      indicatorContainerProps={{
        style: { marginTop: "3px" },
      }}
    >
      {carouselArray.map((slide, index) => (
        <Slide slide={slide} key={index} />
      ))}
    </Carousel>
  )
}
