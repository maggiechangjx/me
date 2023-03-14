import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { h_img } from '../style/images.module.css'

const page = () => {
   return (
     <Layout id="posterDesigns">
         <StaticImage 
            src="../images/poster-designs/p1.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/poster-designs/p2.jpg" 
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