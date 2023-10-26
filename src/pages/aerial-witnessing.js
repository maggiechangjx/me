import React from 'react'
import Layout from "../components/layout"

import { h_img, 
  h_img_45, 
  v_img_96, 
  memento_img_h50, 
  memento_img_h33 } from "../style/images.module.css"

import { section_divider,
  section_divider_gradient_up, 
  section_divider_blank, 
  aerial_header_footer } from "../style/divider.module.css"

import map1 from '../images/aerial-witnessing/map1.jpg'
import map2 from '../images/aerial-witnessing/map2.jpg'
import map3 from '../images/aerial-witnessing/map3.jpg'
import exhibition1 from '../images/aerial-witnessing/exhibition.jpg'
import cloud_chamber from '../images/aerial-witnessing/cloud-chamber1.jpg'
import process1 from '../images/aerial-witnessing/process1.jpg'

const pixelsPage = () => {
   return (
      <Layout id='aerialWitnessing' title='aerialWitnessingT'>
        <div className={aerial_header_footer}></div>
        <img src={map1} alt="" className={v_img_96}/>
        <img src={map2} alt="" className={v_img_96}/>
        <img src={map3} alt="" className={v_img_96}/>
        <img src={exhibition1} alt="" className={v_img_96}/>

        <div className={section_divider_blank}></div>
        


        <img src={cloud_chamber} alt="" className={h_img_45}/>
        <img src={process1} alt="" className={h_img_45}/>
      </Layout>
   )
 }
 
 export default pixelsPage