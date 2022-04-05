import React, { useState } from "react"
import useMessage from "@rottitime/react-hook-message-event"

import { ThemeProvider } from "@mui/material/styles"
import { Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children, location }) => {
  console.log(location)

    useMessage('width', (send, payload) => {
    console.log(payload)
  })

      useMessage('height', (send, payload) => {
    console.log(payload)
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <main>
        <Container
          fixed
          sx={{
            height: `${location?.search?.height}px`,
            width: `${location?.search?.width}px`,
            overflow: "hidden",
          }}
        >
          {children}
        </Container>
      </main>
    </ThemeProvider>
  )
}
export default Layout
