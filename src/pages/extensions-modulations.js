import React from 'react'
import Layout from "../components/layout"
import Video from "../components/video"
import {bp, full_gif, gif_container} from '../style/gif.module.css'

import gif1 from '../images/extensions-modulations/gif1.gif'
import gif2 from '../images/extensions-modulations/gif2.gif'
import gif3 from '../images/extensions-modulations/gif3.gif'

const extensionsPage = () => {
   return (
     <Layout id="exMod" title="exModT">
         <Video url="https://www.youtube.com/embed/eaZ4aEEWOLE" title="Through extension and modulation I hear my body"></Video>
         <div className={gif_container}>
            <img src={gif1} alt="some description" className={bp}/>
            <img src={gif2} alt="some description" className={bp}/>
         </div>
         <img src={gif3} alt="some description" className={full_gif}/>
      </Layout>
   )
 }
 
 export default extensionsPage