import React from 'react'
import Layout from "../components/layout"
import Video from "../components/video"
import { bp, gif_container } from "../style/gif.module.css"
import { header_footer_space } from '../style/divider.module.css'

import gif1 from '../images/birth-pixels/gif1.gif'
import gif2 from '../images/birth-pixels/gif2.gif'
import gif3 from '../images/birth-pixels/gif3.gif'
import gif4 from '../images/birth-pixels/gif4.gif'

const pixelsPage = () => {
   return (
      <Layout id='birthPixels' title='birthPixelsT'>
         <div className={header_footer_space}></div>
         <Video url="https://www.youtube.com/embed/d7XMW07Y5IA" title="Birth by Pixels"></Video>   
         <div className={gif_container}>
            <img src={gif1} alt="some description" className={bp}/>
            <img src={gif2} alt="some description" className={bp}/>
            <img src={gif3} alt="some description" className={bp}/>
            <img src={gif4} alt="some description" className={bp}/>
         </div>
         <div className={header_footer_space}></div>
      </Layout>
   )
 }
 
 export default pixelsPage