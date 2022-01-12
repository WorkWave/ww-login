import * as React from "react"

import { ThemeProvider } from "@mui/material/styles"
import { Container, Box } from "@mui/material"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container fixed sx={{ height: "100%" }}>
        <main style={{ marginTop: "15%" }}>{children}</main>
      </Container>
    </ThemeProvider>
  )
}
export default Layout
