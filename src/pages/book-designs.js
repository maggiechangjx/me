import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { v_img, h_img } from '../style/images.module.css'

const page = () => {
   return (
     <Layout id="bookDesigns">
         <StaticImage 
            src="../images/book-designs/m1.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/m2.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/m3.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/m4.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag1.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag2.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag3.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag4.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag5.jpg" 
            alt="Image of performance" 
            placeholder="none" 
            transformOptions={{fit: 'contain'}}
            backgroundColor="transparent"
            className={h_img}
         />
         <StaticImage 
            src="../images/book-designs/mag6.jpg" 
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