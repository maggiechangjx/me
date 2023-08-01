import React from "react"
import { video, video_frame } from "../style/video.module.css"

const Video = ({ url, title }) => (
  <div className={video_frame}>
    <iframe
      className={video}
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video