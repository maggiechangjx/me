import React from 'react'
import Layout from "../components/layout"
import site47 from '../images/localhost/site4-7.gif'
import site720 from '../images/localhost/site7-20.gif'
import site2023 from '../images/localhost/site20-23.gif'
import { localhost_style } from '../style/gif.module.css'

const localhostPage = () => {
   return (
     <Layout id="localhost" title="localhostT">
         <img src={site47} alt="Website changes from 4AM to 7AM" className={localhost_style}/>
         <img src={site720} alt="Website changes from 7AM to 8PM" className={localhost_style}/>
         <img src={site2023} alt="Website changes from 8PM to 11PM" className={localhost_style}/>
      </Layout>
   )
 }
 
 export default localhostPage