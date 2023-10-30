import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { v_img, h_img, v_img_96 } from '../style/images.module.css'
import { header_footer_space } from '../style/divider.module.css'

import p1 from '../images/projected/p1.jpg'
import p2 from '../images/projected/p2.jpg'
import p3 from '../images/projected/p3.jpg'

const projectedPage = () => {
   return (
     <Layout id="projected" title="projectedT">
         <div className={header_footer_space}></div>
         <img src={p1} alt="Image of performance" className={v_img_96} />
         <img src={p2} alt="Image of performance" className={v_img_96} />
         <img src={p3} alt="Image of performance" className={v_img_96} />
   
         {/*}
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
         */}
         <StaticImage 
            src="../images/projected/p4.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <div className={header_footer_space}></div>
      </Layout>
   )
 }
 
 export default projectedPage