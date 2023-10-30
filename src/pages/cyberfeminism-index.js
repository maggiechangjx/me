import React from 'react'
import Layout from "../components/layout"
import { 
   cyberfem_poster,
   h_img,
   v_img_96 } from '../style/images.module.css'
import { header_footer_space, section_divider_blank } from '../style/divider.module.css'

import p1 from '../images/cyberfem/1.jpg'
import p2 from '../images/cyberfem/2.jpg'
import p3 from '../images/cyberfem/3.jpg'
import p4 from '../images/cyberfem/4.jpg'
import poster from '../images/cyberfem/poster.png'

const cyberfemPage = () => {
   return (
     <Layout id="cyberfem" title="cyberfemT">
         <div className={header_footer_space}></div>
         <img src={poster} alt="event poster" className={v_img_96}/>
         <div className={section_divider_blank}></div>
         <img src={p3} alt="Mindy Seu presenting the Cyberfeminism Index" className={h_img} />
         <img src={p1} alt="event" className={h_img} />
         <img src={p4} alt="Friends" className={h_img} />
         <img src={p2} alt="Books" className={h_img} />
         <div className={header_footer_space}></div>
      </Layout>
   )
 }
 
 export default cyberfemPage