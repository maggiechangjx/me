import React from 'react'
import Layout from "../components/layout"
import site47 from '../images/localhost/site4-7.gif'
import site720 from '../images/localhost/site7-20.gif'
import site2023 from '../images/localhost/site20-23.gif'
import server47 from '../images/localhost/server4-7.gif'
import server720 from '../images/localhost/server7-20.gif'
import server2023 from '../images/localhost/server20-23.gif'
import { localhost_style, section_divide } from '../style/gif.module.css'
import { header_footer_space } from '../style/divider.module.css'
import { localhost_img_desc } from '../style/text.module.css'

const localhostPage = () => {
   return (
     <Layout id="localhost" title="localhostT">
         <div className={header_footer_space}></div>

         <img src={site47} alt="Website changes from 4AM to 7AM" className={localhost_style}/>
         <img src={server47} alt="Website changes from 4AM to 7AM" className={localhost_style}/>
         <p className={localhost_img_desc}>Timelapse of the website and server from 4AM to 7AM</p>

         <div className={section_divide}></div>
            
         <img src={site720} alt="Website changes from 7AM to 8PM" className={localhost_style}/>
         <img src={server720} alt="Website changes from 7AM to 8pM" className={localhost_style}/>
         <p className={localhost_img_desc}>Timelapse of the website and server from 7AM to 8PM</p>
         
         <div className={section_divide}></div>

         <img src={site2023} alt="Website changes from 8PM to 11PM" className={localhost_style}/>
         <img src={server2023} alt="Website changes from 8PM to 11PM" className={localhost_style}/>
         <p className={localhost_img_desc}>Timelapse of the website and server from 8PM to 11PM</p>

         <div className={header_footer_space}></div>
      </Layout>
   )
 }
 
 export default localhostPage