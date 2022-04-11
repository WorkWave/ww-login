import React, { useEffect, useState } from "react"
import useMessage from "@rottitime/react-hook-message-event"

import { ThemeProvider } from "@mui/material/styles"
import { Container, Backdrop } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../theme"

const Layout = ({ children, location }) => {
  // console.log(location)

  // useMessage("*", (send, payload) => {
  //   console.log(payload)
  // })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div
        sx={{
          overflow: "hidden",
          // paddingTop: "15%",
          height: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
export default Layout
