import React, { useState } from "react"
import useMessage from "@rottitime/react-hook-message-event"
import * as queryString from "query-string"

import { ThemeProvider } from "@mui/material/styles"
import { Container, Box } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <main>
        <Container
          fixed
          sx={{
            maxHeight: `${location?.search?.height}px`,
            maxWidth: `${location?.search?.width}px`,
            overflow: "hidden",
          }}
        >
          {children}
        </Container>{" "}
      </main>
    </ThemeProvider>
  )
}
export default Layout
