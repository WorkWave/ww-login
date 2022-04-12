import React from "react"

import { Grid, Button, Typography } from "@mui/material"

export const SlideFooter = ({
  contentHeader,
  contentText,
  ctaLink,
  ctaText,
}) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
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
          lineHeight: "1.2",
        }}
      >
        {contentText}
      </Typography>

      <a
        href={ctaLink}
        style={{ textDecoration: "none", marginTop: "1rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" color="primary">
          {ctaText}
        </Button>
      </a>
    </Grid>
  )
}
