import React, { useState,useEffect } from 'react';
import { Link, useScrollRestoration } from 'gatsby';
import PropTypes from 'prop-types';
import { 
   nav,
   bio,
   bio_paragraph,
   bio_trigger,
   bio_trigger_mobile,
   show_extra_bio,
   works_list,
   show,
   work_item, 
   work_item_mobile,
   visible_title,
   select_title,
   description,
   medium,
   year,
   github_link,
   vertical_align_links,
   sub_caption,
   site_title
} from '../style/nav.module.css';

if (typeof window !== "undefined") {
   // eslint-disable-next-line global-require
   require("smooth-scroll")('a[href*="#"]')
 }

const Nav = ({id, title}) => {
   {/* code for detecting screen width, currently not needed
   const [width, setWidth] = useState(window.innerWidth);

   function logWindowSizeChange() {
      setWidth(window.innerWidth);
   }

   useEffect(() => {
      window.addEventListener('resize', logWindowSizeChange);
      return () => {
          window.removeEventListener('resize', logWindowSizeChange);
      }
   }, []);

   const is_mobile = width <= 700;
   */}

   const [bioStatus, setBioStatus] = useState(false);

   const toggleBio = () => {
      setBioStatus(!bioStatus);
   }

   useEffect(()=>{
      if (id !== "home") {
         document.getElementById(id).classList.add(`${show}`);
         document.getElementById(title).classList.add( `${select_title}`);
         
         // scroll to the title (for mobile)
         const posID = id.concat("T");
         const scrollPosition = document.getElementById(posID).getBoundingClientRect().top;
         console.log(`scrollPosition: ${scrollPosition}`)
         document.getElementById('nav').scrollTo(0, scrollPosition);
      }
   },[])

   return (
      <div className={ nav } id='nav'>
         <div className={bio}>
            <p>
               <Link to='/' className={site_title}>Maggie Chang</Link><br/>
               I'm a creative technologist, designer, and artist using digital 
               technologies as carriers for both poetics and function through 
               interaction, generative design, metaphors, and performance. <a onClick={toggleBio} className={bio_trigger_mobile}> [...]</a>
            </p>
            <div className={bioStatus? show_extra_bio : work_item_mobile}>
               <p>
                  My work reflects on how the ecology of humans, tools, and 
                  environment continuously shape each other. Using frameworks of speculative design, 
                  I create alternative technological and social narratives to 
                  reimagine the possibilities for the tools that we use and the infrastructures
                  that we inhabit in the present. <a onClick={toggleBio} className={bio_trigger}> [...]</a>
               </p>
            </div>
            <div className={bioStatus? show_extra_bio : work_item}>
               <p className={description}>
                  I studied sculpture with a concentration
                  in <a href='https://ctc.risd.edu/' target='blank'>Computation, 
                  Technology, and Culture (CTC) </a> at the Rhode Island School 
                  of Design. Inspired by the notion of a website being <a 
                  href='https://thecreativeindependent.com/essays/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/' target='blank'> 
                  "a shifting 
                  house next to a river of knowledge"</a>, I see my own website 
                  as evolving snapshots of my growing practice, as some projects 
                  speak more directly to my current inqueries while others sediment
                  on this interface.
                  <br/><br/>
                  <a href='https://www.are.na/maggie-chang' target='_blank'>are.na</a><br/>
                  {/*<a href='https://drive.google.com/file/d/13sb2Tcp0-aVuYlwepRQjWYkfqGGuG7F7/view?usp=sharing' target='_blank'>Resume</a> <br/>*/}
                  maggiechangjx [at] gmail [dot] com
               </p>
            </div>
         </div>

         {/* <p>Hey! I'm <Link to='/'>Maggie</Link>.</p> */}
         <div id='home' className={work_item}>
            <p className={description}>
               I'm a creative technologist, artist, and designer interested in 
               exploring systems of interaction and generation, metaphors, myth-making,
               worlding, etc...
            </p>
         </div>
         
         <ul className = {works_list}>
            {/* <li>Selected works:</li> */ }
            {/*
            <li>
               <div id="carouselTestT">
                  <Link to='/carousel-test/'>Carousel Test</Link>
               </div>
               <div id="carouselTest" className={work_item}></div>
            </li>
            */}
            <li >
               <div id="desirePathsT">  {/* set the id here to be the same as title to be referenced by useEffect() */}
                  <Link to='/desire-paths/'>Desire Paths of Language</Link>
               </div>
               <div id="desirePaths" className={work_item}>
                  <div className={vertical_align_links}>
                     <a href='https://maggiechangjx.github.io/language-desire-path/' target='blank' className={medium}>Website</a>
                     <a href='https://github.com/maggiechangjx/language-desire-path/tree/master/src' target='blank' className={github_link}>Github</a>
                  </div>
                  <p className={year}>2023</p>
                  <p className={description}>
                     This is an online environment where people can make 
                     sentences and poems together. In the writing mode, one can 
                     write a whole or partial sentence by clicking and stringing
                     the exisiting words on the website. The written phrases 
                     are stored on the column on the left. In the editing mode, 
                     one can edit the existing phrases by adding two additional 
                     words to the end of the phrase. The added words will then 
                     appear as new word options on the website. Every once in a 
                     while, some existing words will disappear as options. All 
                     the existing words and written phrases are collectively 
                     stored on the backend, allowing the environment to 
                     continuously propagate.
                  </p>
               </div>
            </li>
            <li>
               <div id="localhostT">
                  <Link to='/localhost/'>localhost:8000</Link>
               </div>
               <div id="localhost"  className={work_item}>
                  <p className={medium}>Rapsberry Pi-hosted website attached to light, 
                  temperature, and sound sensors; laser cut plexiglass box</p>
                  <a href='https://github.com/maggiechangjx/language-desire-path/tree/master/src' target='blank' className={github_link}>Github</a>
                  <p className={year}>2022</p>
                  <p className={description}>
                  localhost:8000 began by asking how technology can be better 
                  connected with the natural environment. 
                  Hosted on a Raspberry Pi attached to sensors that 
                  detect the temperature, brightness, and volume around it, 
                  the website reflects these changes in real time through 
                  its design and accessible content.           
                  In response to the ecological impacts brought 
                  by data centers,this project embraces shifts in locality 
                  and encourages a more holistic view of the internet. 
                  <br/><br/>
                  This is the first iteration of the project, with the working server and 
                  website built in 6-7 weeks. A new web interface is currently in development.
                  </p>
               </div>
            </li>
            <li>
               <div id="mementogenesisT">
                  <Link to='/mementogenesis/'>Mementogenesis</Link>
               </div>
               <div id="mementogenesis"  className={work_item}>
                  <p className={medium}>Exploratory visual worldbuilding using Blender, miscroscopy, and AI</p>
                  <p className={year}>2023-ongoing</p>
                  <p className={description}>
                  Mementogenesis currently embodies a series of visual research stemming from a speculative narrative 
                  in which human DNA becomes the only storage for all data and memory. It imagines a probable future where 
                  conventional data centers proves to be too environmentally costly to maintain, while existing research 
                  on DNA storage becomes widely adopted. Considering the social influences of the computer as it migrated 
                  from military contexts to our homes, the narrative imagines a reality in which technology and biology 
                  becomes increasingly entangled. 
                  <br />
                  The current visualizations include:
                  <ul>
                     <li>
                        <Link to={"/mementogenesis/#family_tree_scroll"} className={sub_caption}>→Family Tree of Twins</Link>
                        <div >
                           <p className={medium}>Blender renderings and animation</p>
                           {/* <p className={description}>Each family unit is responsible for storing their own generational memories and a 
                              portion of the social collective data. As an attempt to prevent the loss of data,
                               each family unit must give birth to twins and store a copy of the data in each twin. 
                              Here shows a family tree of 7 generations</p> */}
                        </div>
                     </li>
                     <li id="test"><
                        Link to={"/mementogenesis/#module_scroll"} className={sub_caption}>→Twin Modules</Link>
                        <div >
                           <p className={medium}>Procreate, Adobe Illustrator</p>
                        </div>
                     </li>
                     <li>
                        <Link to={"/mementogenesis/#microscopy_scroll"} className={sub_caption}>→Microscopy, Mutation, Language</Link>
                        <div >
                           <p className={medium}>Microscopy of broken down cheek cells; image generation with Midjourney 
                           and RunwayML; Figma, Procreate, and Blender renderings</p>
                        </div>
                     </li>
                     {/*}
                     <li>
                        <Link to={"/mementogenesis/#language_system_scroll"} className={sub_caption}>→Language System</Link>
                        <div>
                           <p className={medium}>Figma, Procreate, and Blender renderings</p>
                        </div>
                     </li>
                     */}
                  </ul>
                  </p>
               </div>
            </li>
            <li> 
               <div id="aerialWitnessingT">
                  <Link to='/aerial-witnessing/'>Aerial Witnessing</Link>
               </div>
               <div id="aerialWitnessing" className={work_item}>
                  <p className={medium}>Speculative mapping</p>
                  <p className={year}>2023</p>
                  <p className={description}>
                     A series of maps made in relation to <a href='https://www.theguardian.com/environment/2021/feb/08/solar-geoengineering-test-flight-plan-under-fire-over-environmental-concerns-aoe' target='blank'>
                     a solar geoengineering experiment in Northern Sweden</a>. Focusing on the different perspectives 
                     present in the context of technological determinism and climate change, these comparative 
                     maps speculate the different points of views involved in conducting and 
                     protesting against the experiment, including that of the geoengineering lab, the 
                     local indigenous population, and the air itself. This project was made in collaboration 
                     with Miriam Lellek and <a href='https://www.matters-of-activity.de/en/' >Matters of Activity</a>, 
                     as one component of a larger exploration and exhibition around the topic of air.
                  </p>
               </div>
            </li>

            <li>
               <div id="cyberfemT">
                  <Link to='/cyberfeminism-index/'>Cyberfeminism Index Panel</Link>
               </div>
               <div id="cyberfem" className={work_item}>
                  <p className={medium}>Performative reading and panel talk</p>
                  <p className={year}>2022</p>
                  <p className={description}>
                     Together with <a href='https://jon-chen.com/' target='blank'>Jon Chen</a>
                     and <a href='https://vincentli.space/' target='blank'>Vincent Li</a>, 
                     we hosted a panel conversation with designer, researcher, and educator 
                     <a href='https://mindyseu.com/' target='blank'> Mindy Seu</a>,
                      in dialog with journalist, producer, and editor 
                      <a href='https://marisamazriakatz.com/' target='blank'> Marisa Mazria Katz</a> and 
                     designer <a href='https://libbymarrs.net/' target='blank'>Libby Marrs</a>. <br/><br/>
                     
                     As a part of the <a href='https://tour.cyberfeminismindex.com/' target='blank'>
                     Cyberfeminism Index Book Tour</a>, Mindy gave a performative reading of 
                     the Cyberfeminism Index, and was later joined by the panelists in
                     a conversation around the dynamics within holding cross-disciplinary
                     practices as creatives.<br/><br/>

                     {/* An edited transcript of the panel will soon be shared! */}
                  </p>
               </div>
            </li>
            <li>
               <div id="birthPixelsT">
                  <Link to='/birth-pixels/'>Birth by Pixels</Link>
               </div>
               <div id="birthPixels"  className={work_item}>
                  <p className={medium}>Video</p>
                  <p className={year}>2020</p>
                  <p className={description}>
                     A story of a creature that is born inside the screen and 
                     their attempt at navigating the world around them.<br /><br />
                     This video contains a sample of "A Little Noise in the System"
                     by Pauline Oliveros courtesy of Table of the Elements, and "Suiren"
                     by Pauline Oliveros, Stuart Dempster & Panaiotis courtesy of
                     The Orchard Music on behalf of New Albion Records.
                     Environmental images are sourced from Google Earth.
                  </p>
               </div>
            </li>
            {/* <li>
               <div id="variationsT">
                  <Link to='/variations/'>Variations for One: Re</Link>
               </div>
               <div id="variations"  className={work_item}>
                  <p className={medium}>Experimental sound and video</p>
                  <p className={year}>2020</p>
                  <p className={description}>
                     Right channel: 
                     Laptop, voice, mirror, Zoom video conference app,
                     Pure Data sound programming with Teensyduino,<br/><br/>
                     Left channel: 
                     iPad, bluetooth speaker, Zoom H2n recorder,
                     mirror, Zoom video conference app<br/><br/>
                     This video is a translation of two dictionary definitions 
                     of “re”--indicating a repetitive action when used as a 
                     prefix, and the second note of a sol-fa musical scale 
                     when used as a noun. The video on the right is recorded 
                     on a laptop connected to a Zoom video conference. In the 
                     video, I play and modulate voice recordings of the two 
                     definitions of “re” on a programmed component. Through the 
                     component, the voiced definitions are sent to the Zoom 
                     conference on the laptop, and broadcasted through the 
                     bluetooth speaker shown in the video on the left. The 
                     sounds and reverb are then picked up by the iPad, which 
                     is connected to the same Zoom conference as the laptop 
                     that was used to record the video on the right. By being 
                     in the same Zoom conference, the bluetooth speaker, 
                     laptop, and iPad forms a continuous feedback loop, where 
                     the definitions of “re” are continuously echoed and 
                     modified through the process of travelling between these 
                     devices. 
                  </p>
               </div>   
            </li>
            */}
            <li>
               <div id="exModT">
                  <Link to='/extensions-modulations/'>Through extensions and modulations I hear my body</Link>
               </div>
               <div id="exMod"  className={work_item}>
                  <p className={medium}>Experimental sound performance and video</p>
                  <p className={year}>2020</p>
                  <p className={description}>
                     Pure Data sound programming with Teensyduino
                  </p>
               </div>   
            </li>
            <li>
               <div id="projectedT">
                  <Link to='/projected/'>Projected Land, Projected Being</Link>
               </div>
               <div id="projected"  className={work_item}>
                  <p className={medium}>Performance with video projection, music, 
                  and steel</p>
                  <p className={year}>2019</p>
                  <p className={description}>
                     To the pace of music, the performer carries the steel sculpture
                     structure as she attempts to travel through an 
                     ever-shifting landmass projected on and beyond her body. 
                     Throughout her journey, she treats the steel structure as 
                     a tunnel, playground, chair, and eventually a shelter.<br/><br/> 

                     The projection also creates a doppleganger--the performer's
                     and steel structure's shadows. The performer continuously 
                     gazes at her shadow as she traverses the virtual land, 
                     and gradually abandons her physical attachment to her 
                     structure in service of her shadow. 

                  </p>
               </div>   
            </li>
            <li>
               <div id="performanceT">
                  {/* <Link to='/performance/'>Performance</Link> */}
               </div>
               <div id="performance"  className={work_item}>
                  <p className={medium}>Sculpture and video performance</p>
                  <p className={year}>2019</p>
                  <p className={description}>
                     Performance | pər-'fȯr-mən(t)s<br/>
                     : an act of presenting a play, concert, or other form of entertainment<br/>
                     : the action or process of performing a task or function<br/>
                     Oxford Languages<br/>
                  </p>
               </div>   
            </li>
            <li>
               <div id="pearT">
                  {/* <Link to='/pear/'>Counting seconds by the peeling of a pear</Link> */}
               </div>
               <div id="pear"  className={work_item}>
                  <p className={medium}>Video essay</p>
                  <p className={year}>2020</p>
                  <p className={description}>
                  This video essay questions the conventional method of 
                  recording time and the relationship between time and labour 
                  through the consumption of a pear.
                  </p>
               </div>   
            </li>
            <li>
               
               <div id="bookDesigns"  className={work_item}>
                  <p className={medium}>Book and magazine design</p>
                  <p className={year}>2018</p>
                  <p className={description}>
                     A handbook that provides a small origin story and 
                     instructions for Mahjong, a four-player tile-based 
                     game that originated from China. 
                  </p>
               </div>   
            </li>
            <li>
               
               <div id="posterDesigns"  className={work_item}>
                  <p className={medium}>Website</p>
                  <p className={year}>2019</p>
                  <p className={description}>
                  </p>
               </div>   
            </li>
         </ul>


      </div>
   )
}



export default Nav