import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Video from "../components/video"
import { v_img, h_img } from '../style/images.module.css'

const page = () => {
   return (
     <Layout id="pear" title="pearT">
         <Video url="https://www.youtube.com/embed/M9sFs8PShsM" title="Counting seconds by the peeling of a pear"></Video>
         <StaticImage 
            src="../images/pear/p1.png" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/pear/p2.png" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/pear/p3.png" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/pear/p4.png" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/pear/p5.png" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
      </Layout>
   )
 }
 
 export default page