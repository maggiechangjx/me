import React from 'react'
import Layout from "../components/layout"
import { cyberfem_poster } from '../style/images.module.css'

import p1 from '../images/cyberfem/1.jpg'
import p2 from '../images/cyberfem/2.jpg'
import p3 from '../images/cyberfem/3.jpg'
import p4 from '../images/cyberfem/4.jpg'
import poster from '../images/cyberfem/poster.png'

const cyberfemPage = () => {
   return (
     <Layout id="cyberfem" title="cyberfemT">
         <img src={poster} alt="event poster" className={cyberfem_poster}/>
         <img src={p3} alt="Mindy Seu presenting the Cyberfeminism Index"/>
         <img src={p1} alt="event"/>
         <img src={p4} alt="Friends"/>
         <img src={p2} alt="Books"/>
      </Layout>
   )
 }
 
 export default cyberfemPage