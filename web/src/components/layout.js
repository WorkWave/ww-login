import * as React from "react"

import { ThemeProvider } from "@mui/material/styles"
import { Container, Box } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxHeight: "100vh" }}>
        <CssBaseline />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Container fixed sx={{ height: "100vh", overflow: "hidden" }}>
          <main>{children}</main>
        </Container>
      </div>
    </ThemeProvider>
  )
}
export default Layout
