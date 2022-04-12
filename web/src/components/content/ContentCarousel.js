import React, { useState, useEffect } from "react"
import Carousel from "react-material-ui-carousel"

import { Grid } from "@mui/material"

import { SlideFooter } from "./CarouselSlides/SlideFooter"
import { Image } from "./CarouselSlides/Image"
import { Video } from "./CarouselSlides/Video"

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
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 0.5 }}
      >
        {contentImage ? (
          <Image contentImage={contentImage} slide={slide} />
        ) : (
          <Video wistiaUrl={wistiaUrl} />
        )}
      </Grid>
      <SlideFooter
        contentHeader={contentHeader}
        contentText={contentText}
        ctaLink={ctaLink}
        ctaText={ctaText}
      />
    </>
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
