import React, { useState } from "react"
import useMessage from "@rottitime/react-hook-message-event"

import { ThemeProvider } from "@mui/material/styles"
import { Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children, location }) => {
  console.log(location)

  useMessage("*", (send, payload) => {
    console.log(payload)
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container
        fixed
        sx={{
          overflow: "hidden",
          // paddingTop: "15%",
          height: "100vh",
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  )
}
export default Layout
