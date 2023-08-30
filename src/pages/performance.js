import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Video from "../components/video"
import { performance_v_img, performance_v_img_org, h_img } from '../style/images.module.css'

import p1 from '../images/performance/p1.jpg'

const performancePage = () => {
   return (
      <Layout id="performance" title="performanceT">
         <Video url="https://www.youtube.com/embed/LbNKgAJ7k-s" title="perfomance"></Video>

         <StaticImage 
            src="../images/performance/p1.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
            className={performance_v_img}
         />
         <StaticImage 
            src="../images/performance/p2.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={performance_v_img}
         />
       
         <StaticImage 
            src="../images/performance/p3.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/performance/p4.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
      </Layout>
   )
 }
 
 export default performancePage