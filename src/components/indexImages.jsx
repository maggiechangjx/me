import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

// styles
// import { pageStyle } from "./style.js"
import { 
  img25,
  img25_off,
  text_img_container,
  text_on_img,
  text_on_img_hide,
  text_descriptions } from '../style/home.module.css'
import { index_gif_container } from '../style/gif.module.css'

import birth_pix1 from '../images/index/birth_pix1.gif'
import birth_pix2 from '../images/index/birth_pix2.gif'
import birth_pix3 from '../images/index/birth_pix3.gif'
import birth_pix4 from '../images/index/birth_pix4.gif'
import birth_pix5 from '../images/index/birth_pix5.gif'
import birth_pix6 from '../images/index/birth_pix6.gif'

import memento1 from '../images/index/memento1.gif'
import memento2 from '../images/index/memento2.gif'
import memento3 from '../images/index/memento3.gif'
import memento4 from '../images/index/memento4.gif'
import memento5 from '../images/index/memento5.gif'
import memento6 from '../images/index/memento6.gif'
import memento7 from '../images/index/memento7.png'
import memento8 from '../images/index/memento8.png'
import memento9 from '../images/index/memento9.png'
import memento10 from '../images/index/memento10.png'
import memento11 from '../images/index/memento11.png'
import memento12 from '../images/index/memento12.png'
import memento13 from '../images/index/memento13.png'
import memento14 from '../images/index/memento14.png'
import memento15 from '../images/index/memento15.png'

import localhost1 from '../images/index/localhost1.gif'
import localhost2 from '../images/index/localhost2.gif'
import localhost3 from '../images/index/localhost3.gif'
import localhost4 from '../images/index/localhost4.gif'
import localhost5 from '../images/index/localhost5.gif'
import localhost6 from '../images/index/localhost6.png'

import cyberfem1 from '../images/index/cyberfem1.png'
import cyberfem2 from '../images/index/cyberfem2.png'

import desirepath1 from '../images/index/desirepath1.gif'
import desirepath2 from '../images/index/desirepath2.gif'
import desirepath3 from '../images/index/desirepath3.gif'
import desirepath4 from '../images/index/desirepath4.gif'
import desirepath5 from '../images/index/desirepath5.gif'
import desirepath6 from '../images/index/desirepath6.png'

import variations1 from '../images/index/variations1.gif'
import variations2 from '../images/index/variations2.gif'
import variations3 from '../images/index/variations3.png'

import projected1 from '../images/index/projected1.png'
import projected2 from '../images/index/projected2.png'
import projected3 from '../images/index/projected3.png'

import exmod1 from '../images/index/exmod1.gif'
import exmod2 from '../images/index/exmod2.gif'
import exmod3 from '../images/index/exmod3.gif'
import exmod4 from '../images/index/exmod4.gif'


const Index = () => {
  // ADD DOUBLE TAP FOR MOBILE 

  //const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const windowWidth = window.innerWidth;
  // console.log(`window width: ${windowWidth}`)
  const widthThreshold = 700;

  const [desirePathState, setDesirePathState] = useState(img25_off);
  const [localhostState, setLocalhostState] = useState(img25_off);
  const [mementoState, setMementoState] = useState(img25_off);
  const [cyberfemState, setCyberfemState] = useState(img25_off);
  const [birthPixState, setBirthPixState] = useState(img25_off);
  const [variationsState, setVariationsState] = useState(img25_off);
  const [exModState, setExModState] = useState(img25_off);
  const [projectedState, setProjectedState] = useState(img25_off);

  const [desirePathTextState, setDesirePathTextState] = useState(text_on_img_hide);
  const [localhostTextState, setLocalhostTextState] = useState(text_on_img_hide);
  const [mementoTextState, setMementoTextState] = useState(text_on_img_hide);
  const [cyberfemTextState, setCyberfemTextState] = useState(text_on_img_hide);
  const [birthPixTextState, setBirthPixTextState] = useState(text_on_img_hide);
  const [variationsTextState, setVariationsTextState] = useState(text_on_img_hide);
  const [exModTextState, setExModTextState] = useState(text_on_img_hide);
  const [projectedTextState, setProjectedTextState] = useState(text_on_img_hide);

  function activateImgOnHover(e) {
    // light up images and show text when mouse overs over certain project
    // change state of all images of same project
    //console.log(e.target.src)
    if (e.target.id === 'birth-pixels') {
      setBirthPixState(img25);
      setBirthPixTextState(text_on_img);
    }
    else if (e.target.id === 'mementogenesis') {
      setMementoState(img25);
      setMementoTextState(text_on_img);
    }
    else if (e.target.id === 'localhost') {
      setLocalhostState(img25);
      setLocalhostTextState(text_on_img);
    }
    else if (e.target.id === 'desire-paths') {
      setDesirePathState(img25);
      setDesirePathTextState(text_on_img);
    }
    else if (e.target.id === 'variations') {
      setVariationsState(img25);
      setVariationsTextState(text_on_img);
    }
    else if (e.target.id === 'projected') {
      setProjectedState(img25);
      setProjectedTextState(text_on_img);
    }
    else if (e.target.id === 'extensions-modulations') {
      setExModState(img25);
      setExModTextState(text_on_img);
    }
    else if (e.target.id === 'cyberfeminism-index') {
      setCyberfemState(img25);
      setCyberfemTextState(text_on_img);
    }
    else { console.log('homepage image selection issue'); }
  }

  function deactivateImgOnHover(e) {
    if (e.target.id ==='birth-pixels') {
      setBirthPixState(img25_off);
      setBirthPixTextState(text_on_img_hide);
    }
    else if (e.target.id === 'mementogenesis') {
      setMementoState(img25_off);
      setMementoTextState(text_on_img_hide);
    }
    else if (e.target.id === 'localhost') {
      setLocalhostState(img25_off);
      setLocalhostTextState(text_on_img_hide);
    }
    else if (e.target.id === 'desire-paths') {
      setDesirePathState(img25_off);
      setDesirePathTextState(text_on_img_hide);
    }
    else if (e.target.id === 'variations') {
      setVariationsState(img25_off);
      setVariationsTextState(text_on_img_hide);
    }
    else if (e.target.id === 'projected') {
      setProjectedState(img25_off);
      setProjectedTextState(text_on_img_hide);
    }
    else if (e.target.id === 'extensions-modulations') {
      setExModState(img25_off);
      setExModTextState(text_on_img_hide);
    }
    else if (e.target.id === 'cyberfeminism-index') {
      setCyberfemState(img25_off);
      setCyberfemTextState(text_on_img_hide);
    }
  }

  // variables for mobile click interactions
  //let mobileClickCount = 0;
  //let prevMobileClickTarget = '';
  const [mobileClickCount, setMobileClickCount] = useState(0);
  const [prevMobileClickTarget, setPrevMobileClickTarget] = useState('');

  function linkToProject(e) {
    // on click, show project page
    // the ID of the image corresponds to the page name
    if (windowWidth >= widthThreshold) {
      navigate(`/${e.target.id}`);
      // console.log(e.target.id);
      console.log('desktop mode');
    }
    else if (windowWidth < widthThreshold) {
      // FIGURE OUT LOGIC
      //mobileClickCount += 1;
      setMobileClickCount(mobileClickCount + 1);
      console.log(`previous mobile click target: ${prevMobileClickTarget}`)

      if (prevMobileClickTarget === '') {
        //prevMobileClickTarget = e.target.id;
        setPrevMobileClickTarget(e.target.id);
        console.log('prevmobiletarget was blank');
      }
      else if (mobileClickCount >= 2 && e.target.id == prevMobileClickTarget) {
        navigate(`/${e.target.id}`);
        //mobileClickCount = 0;
        setMobileClickCount(0);
        console.log('page should proceed');
      }
      else if (prevMobileClickTarget != e.target.id) {
        //mobileClickCount += 1; 
        setMobileClickCount(mobileClickCount + 1);
        setPrevMobileClickTarget(e.target.id);
        console.log('case 2-3');
      }
      console.log(`${e.target.id}: ${mobileClickCount}`)
      console.log(`prevMobileClickTarget: ${prevMobileClickTarget}`);
      console.log(`current click: ${e.target.id}`)
    }
    else {
      console.log('/components/indexImages.jsx linkToProject() window width issues')
    }
  }
  
  return (
      <div className={index_gif_container}>
        
        {/* HOVER OVER IMAGES TO SHOW TITLE/MEDIUM/BRIEF DESCRIPTION ; CLICK TO CHANGE PAGE */}

        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={birth_pix1} alt="" className={birthPixState} id='birth-pixels'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento11} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={desirepath4} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={desirePathTextState}>
            Desire Paths of Language<br/>
            <div className={text_descriptions}>Website<br/>2023<br/></div>
          </div>
          <img src={localhost1} alt="" className={localhostState} id='localhost'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={cyberfem2} alt="" className={cyberfemState} id='cyberfeminism-index'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={exmod2} alt="" className={exModState} id='extensions-modulations'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={exModTextState}>
            Through extensions and modulations I hear my body<br/>
            <div className={text_descriptions}>Sound performance and video<br/>2020<br/></div>
          </div>
          <img src={projected3} alt="" className={projectedState} id='projected'/>
        </div>
        
        {/*------------ row 2 -------------*/}

        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={variations2} alt="" className={variationsState} id='variations'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={variationsTextState}>
            Variations for One: Re<br/>
            <div className={text_descriptions}>Experimental sound and video<br/>2020<br/></div>
          </div>
          <img src={desirepath6} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={birth_pix4} alt="" className={birthPixState} id='birth-pixels'/>
        </div> 
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento5} alt="" className={mementoState} id='mementogenesis'/> 
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={localhost4} alt="" className={localhostState} id='localhost'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={birth_pix5} alt="" className={birthPixState} id='birth-pixels'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={birthPixTextState}>
            Birth by Pixels<br/>
            <div className={text_descriptions}>Video<br/>2020<br/></div>
          </div>
          <img src={localhost5} alt="" className={localhostState} id='localhost'/>
        </div>

        {/*------------ row 3 -------------*/}

        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={cyberfem1} alt="" className={cyberfemState} id='cyberfeminism-index'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={cyberfemTextState}>
            Cyberfeminism Index Panel<br/>
            <div className={text_descriptions}>Performative reading and panel talk<br/>2022<br/></div>
          </div>
          <img src={memento15} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={mementoTextState}>
            Mementogenesis<br/>
            <div className={text_descriptions}>Speculative worldbuilding through Blender, DNA Microscopy, and AI<br/>2023-Ongoing<br/></div>
          </div>
          <img src={projected1} alt="" className={projectedState} id='projected'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={desirepath1} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={birth_pix6} alt="" className={birthPixState} id='birth-pixels'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento3} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={desirepath3} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        
        {/*------------ row 4 -------------*/}
        
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento6} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={exmod3} alt="" className={exModState} id='extensions-modulations'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={localhostTextState}>
            localhost:8000<br/>
            <div className={text_descriptions}>Self-hosted website attached to environmental sensors<br/>2022<br/></div>
          </div>
          <img src={birth_pix3} alt="" className={birthPixState} id='birth-pixels'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={localhost2} alt="" className={localhostState} id='localhost'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento9} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <div className={projectedTextState}>
            Projected Land, Projected Being<br/>
            <div className={text_descriptions}>Performance<br/>2019<br/></div>
          </div>
          <img src={variations3} alt="" className={variationsState} id='variations'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={projected2} alt="" className={projectedState} id='projected'/>
        </div>

        {/*------------ row 5 -------------*/}

        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={desirepath5} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={localhost3} alt="" className={localhostState} id='localhost'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento8} alt="" className={mementoState} id='mementogenesis'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={birth_pix2} alt="" className={birthPixState} id='birth-pixels'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={desirepath2} alt="" className={desirePathState} id='desire-paths'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={exmod1} alt="" className={exModState} id='extensions-modulations'/>
        </div>
        <div onMouseOver={activateImgOnHover} onMouseLeave={deactivateImgOnHover} 
        onClick={(linkToProject)} className={text_img_container}>
          <img src={memento13} alt="" className={mementoState} id='mementogenesis'/>
        </div>

      </div>
  )
}

export default Index
