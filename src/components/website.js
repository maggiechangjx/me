import React from "react"
import { web_frame, web_style } from "../style/website.module.css"

const Website = ({ url }) => (
   <div className={web_frame}>
      <iframe
         src={url}   
      />
   </div>
   
)

export default Website
