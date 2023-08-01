import React from 'react'
import Layout from "../components/layout"
import Website from '../components/website'
import { gif_container, bp } from '../style/gif.module.css'

import deer from '../images/desire-paths/deer-edit.gif'
import select from '../images/desire-paths/select.gif'
import timelapse1 from '../images/desire-paths/timelapse1.gif'
import timelapse2 from '../images/desire-paths/timelapse2.gif'

const desirePathsPage = () => {
   return (
      <Layout id="desirePaths" title="desirePathsT">
         <Website url="https://maggiechangjx.github.io/language-desire-path"></Website>
         <div className={gif_container}>
            <img src={select} alt="Writing mode" className={bp}/>
            <img src={timelapse1} alt="A timelapse of the website" className={bp}/>
            <img src={deer} alt="Edit mode" className={bp}/>
            <img src={timelapse2} alt="Another timelapse of the website, now visible with more changes" className={bp}/>
         </div>
      </Layout>
   )
 }
 
 export default desirePathsPage