import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { v_img, h_img } from '../style/images.module.css'

const projectedPage = () => {
   return (
     <Layout id="projected" title="projectedT">
         <StaticImage 
            src="../images/projected/p1.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
            className={v_img}
         />
         <StaticImage 
            src="../images/projected/p2.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={v_img}
         />
         <StaticImage 
            src="../images/projected/p3.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={v_img}
         />
         <StaticImage 
            src="../images/projected/p4.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         
      </Layout>
   )
 }
 
 export default projectedPage