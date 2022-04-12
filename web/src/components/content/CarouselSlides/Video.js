import React from "react"

import ReactPlayer from "react-player/wistia"

export const Video = ({ wistiaUrl }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%",
        minHeight: "100%",
        minWidth: "100%",
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
  )
}
