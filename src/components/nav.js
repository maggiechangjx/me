import React, { useState,useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { 
   nav,
   bio,
   bio_trigger,
   show_extra_bio,
   works_list,
   show,
   work_item, 
   visible_title,
   select_title,
   description,
   medium,
   year,
   github_link,
   vertical_align_links,
} from '../style/nav.module.css'


const Nav = ({id, title}) => {
   const [bioStatus, setBioStatus] = useState(false);

   const toggleBio = () => {
      setBioStatus(!bioStatus);
   }

   useEffect(()=>{
      if (id !== "home") {
         document.getElementById(id).classList.add(`${show}`)
         document.getElementById(title).classList.add( `${select_title}`)
      }
   },[])

   return (
      <div className={ nav }>
         <div className={bio}>
            <p>Hey! I'm <Link to='/'>Maggie</Link>.<br/>
            I'm a creative technologist, designer, and artist who enjoys using digital 
            technologies as carriers for both poetics and function through 
            interaction, generative design, metaphors, and performance.<br/><br/>

            Through my work, I reflect on how the ecology of humans, tools, and our 
            environment continuously shape each other. Using frameworks of speculative design, 
            I create alternative technological and social narratives to 
            reimagine the possibilities for the tools that we use and the infrastructures
            that we inhabit in the present. 

               <a onClick={toggleBio} className={bio_trigger}> [...]</a>
            </p>
            <div className={bioStatus? show_extra_bio : work_item}>
               <p className={description}>
                  I studied sculpture with a concentration
                  in <a href='https://ctc.risd.edu/' target='blank'>Computation, 
                  Technology, and Culture (CTC) </a> at the Rhode Island School 
                  of Design. Inspired by the notion of a website being 
                  <a href='https://thecreativeindependent.com/essays/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/' target='blank'> 
                  "a shifting 
                  house next to a river of knowledge"</a>, I see my own website 
                  as evolving snapshots of my growing practice, as some projects 
                  speak more directly to my current inqueries while others sediment
                  on this interface.
                  <br/><br/>
                  <a href='https://www.are.na/maggie-chang' target='_blank'>Are.na</a><br/>
                  <a href='https://drive.google.com/file/d/13sb2Tcp0-aVuYlwepRQjWYkfqGGuG7F7/view?usp=sharing' target='_blank'>Resume</a> <br/>
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
                  localhost:8000 is a website hosted on a local Raspberry Pi that's 
                  attached to environmental sensors detecting the 
                  temperature, brightness, and loudness around the server. 
                  The website's digital environment and accessible content 
                  flickers to the changes in the physical enviroment around 
                  its server. <br/><br/>
                  The Raspberry Pi server lives with me, and it switches offline when
                  I am not around to take care of it. I'm currently out of town for a 
                  few weeks, so the site is hibernating for a while. The new address for the
                  website will be available after I return.
                  </p>
               </div>
            </li>
            <li>
               <div id="cyberfemT">
                  <Link to='/cyberfeminism-index/'>Cyberfeminism Index Panel</Link>
               </div>
               <div id="cyberfem"  className={work_item}>
                  <p className={medium}>Performative reading and panel talk</p>
                  <p className={year}>2022</p>
                  <p className={description}>
                     Together with my friends <a href='https://jon-chen.com/' target='blank'>Jon Chen</a>
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

                     An edited transcript of the panel will soon be shared!
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
            <li>
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