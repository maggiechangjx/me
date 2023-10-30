import React from 'react'
import Layout from "../components/layout"

import { h_img, 
  h_img_45, 
  v_img_96, 
  memento_img_h_full_margins,
  memento_img_h50, 
  memento_img_h33,
  memento_flexbox_1row,
  flex_img_h50_caption } from "../style/images.module.css"

import { 
  section_divider_blank, 
  subsection_divider,
  aerial_header_footer } from "../style/divider.module.css"

import { 
  in_page_text,
  img_caption,
  text_box_h50 } from "../style/text.module.css"

import map1 from '../images/aerial-witnessing/map1.jpg'
import map2 from '../images/aerial-witnessing/map2.jpg'
import map3 from '../images/aerial-witnessing/map3.jpg'
import exhibition1 from '../images/aerial-witnessing/exhibition.jpg'

import cloud_chamber from '../images/aerial-witnessing/cloud-chamber1.jpg'
import cloud_chamber1 from '../images/aerial-witnessing/cloud-chamber1a.jpg'
import cloud_chamber2 from '../images/aerial-witnessing/cloud-chamber2.jpg'
import process1 from '../images/aerial-witnessing/process1.jpg'
import air_collect from '../images/aerial-witnessing/air-collect.jpg'
import air_collect2 from '../images/aerial-witnessing/air-collect2.jpg'

const pixelsPage = () => {
   return (
      <Layout id='aerialWitnessing' title='aerialWitnessingT'>
        <div className={aerial_header_footer}></div>
        <img src={map1} alt="" className={v_img_96}/>
        <img src={map2} alt="" className={v_img_96}/>
        <img src={map3} alt="" className={v_img_96}/>
        <img src={exhibition1} alt="" className={v_img_96}/>

        <div className={section_divider_blank}></div>
        
        {/*
        <p className={in_page_text}>
          collecting "samples of air" but 
          rather more so the remnants of air. Thinking more about 
          observation of clouds -- disembodied way of viewing. 
          Discussions around anthropocentrism, what it means to witness air -- witnessing 
          shows as much about the thing as it shows about the positionality of the witness. 
          
          Summary of geoenginnering experiment -- view of the land and its above airspace as a piece of land 
          fit to be experimented upon
          vs view of the land as a part of lived experience 
          vs nonhuman agents within that environment.
        </p>
        */}
        <div className={memento_flexbox_1row}>
          <div className={text_box_h50}>
            <p>
            The ideation for the project began with a site visit to the AIDA cloud 
            chamber at the Karlsruhe Institute of Technology, 
            embodied explorations of collecting samples of air, readings, and discussions around 
            what it means to witness air. Considering air as a substance that 
            exists in multiple scales while being invisible to the human 
            eye, witnessing it reveals just as much about the positionality 
            of the witness as it does about the qualities of air itself.
            <br/><br/>
            My collaborator and I further examined the question of aerial perspective 
            through the specific solar geoengineering experiment. Proposed by a team of Harvard 
            scientists and having the testing ground set in Kiruna, Lapland, the experiment 
            <code>&#40;</code><a href='https://www.keutschgroup.com/scopex' target='blank'>SCoPEx</a><code>&#41;</code> 
            proposes a solution to global warming by injecting aerosols 20km into the 
            stratosphere to scatter the sunlight hitting the Earth. The experiment was called off 
            after it was met by protests from the indigenous population of Kiruna and 
            environmental groups.
            </p>
            
          </div>
          <div className={text_box_h50}>
            <p>
            It is difficult to reframe from anthropocentric perspectives as large 
            scale climate engineering becomes a possibility. As the environment can become discretized 
            and decontextualized into data quantifiable by machines and algorithms, we cannot 
            forget the existence of localized, 
            embodied knowledge that continuously forms as we <a href="https://rai.onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9655.2010.01613.x" target="blank">
            tread along the threshold between air and ground</a>. Consdering cartography as a 
            representation of power, dictating the lens through which the land is perceived, 
            we made comparative maps of the same location speculating the perspective of the scientists, 
            the local population, and the air itself.
            </p>
          </div>
        </div>

        <div className={memento_flexbox_1row}>
          <figure>
            <img src={cloud_chamber1} alt="" className={flex_img_h50_caption}/>
            <figcaption><p className={img_caption}>Atmospheric Aerosol Research Division at the Karlsruhe Institute of Technology</p></figcaption>
          </figure>
          <figure>
            <img src={cloud_chamber2} alt="" className={flex_img_h50_caption}/>
            <figcaption><p className={img_caption}>The AIDA cloud chamber</p></figcaption>
          </figure>
        </div>

        <div className={memento_flexbox_1row}>
          <figure>
            <img src={air_collect} alt="" className={flex_img_h50_caption}/>
            <figcaption><p className={img_caption}>Artifacts collected in search of air</p></figcaption>
          </figure>
          <figure>
            <img src={process1} alt="" className={flex_img_h50_caption}/>
            <figcaption><p className={img_caption}>Initial brainstorming</p></figcaption>
          </figure>
        </div>
        <div className={aerial_header_footer}></div>
      </Layout>
   )
 }
 
 export default pixelsPage