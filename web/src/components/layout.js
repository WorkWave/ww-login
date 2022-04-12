import React from "react"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div
        sx={{
          overflow: "hidden",
          height: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
export default Layout
