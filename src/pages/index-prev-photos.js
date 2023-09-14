import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import { Link } from "gatsby"

// components
import Nav from "../components/nav"
import Content from "../components/content"
import Layout from "../components/layout"

// styles
// import { pageStyle } from "./style.js"
import { 
  page,
  title,
  index_img,
  img25,
  img25_block,
  img25_off,
  text_img_container,
  text_on_img,
  text_on_img_hide } from '../style/home.module.css'
import { index_gif_container } from '../style/gif.module.css'

// media
/*
import b1 from '../images/index/b1.gif'
import b2 from '../images/index/b2.gif'
import b3 from '../images/index/b3.gif'
import b4 from '../images/index/b4.gif'
import b5 from '../images/index/b5.gif'
import b6 from '../images/index/b6.gif'
import b7 from '../images/index/b7.gif'
import b8 from '../images/index/b8.gif'
import b9 from '../images/index/b9.gif'
import b10 from '../images/index/b10.gif'
import b11 from '../images/index/b11.gif'
import b12 from '../images/index/b12.png'
import b13 from '../images/index/b13.gif'
import b14 from '../images/index/b14.gif'
import b15 from '../images/index/b15.gif'
import b16 from '../images/index/b16.gif'
import b17 from '../images/index/b17.gif'
import b18 from '../images/index/b18.gif'
import b19 from '../images/index/b19.gif'
import b20 from '../images/index/b20.gif'
import b21 from '../images/index/b21.gif'
import b22 from '../images/index/b22.gif'
import b23 from '../images/index/b23.gif'
import b24 from '../images/index/b24.gif'
import b25 from '../images/index/b25.png'
import b26 from '../images/index/b26.gif'
import b27 from '../images/index/b27.gif'
import b28 from '../images/index/b28.gif'

import d1 from '../images/index/d1.gif'
import d2 from '../images/index/d2.gif'
import d3 from '../images/index/d3.gif'
import d4 from '../images/index/d4.png'
import d5 from '../images/index/d5.png'
import d6 from '../images/index/d6.png'
import d7 from '../images/index/d7.png'
import d8 from '../images/index/d8.png'
import d9 from '../images/index/d9.png'
import d10 from '../images/index/d10.png'

import e1 from '../images/index/e1.gif'
import e2 from '../images/index/e2.gif'
import em1 from '../images/index/em1.gif'
import em2 from '../images/index/em2.gif'
import em3 from '../images/index/em3.gif'

import l1 from '../images/index/l1.gif'
import l2 from '../images/index/l2.gif'
import l3 from '../images/index/l3.gif'
import l4 from '../images/index/l4.gif'
import l5 from '../images/index/l5.gif'
import l6 from '../images/index/l6.gif'
import l7 from '../images/index/l7.gif'
import l8 from '../images/index/l8.gif'
import l9 from '../images/index/l9.png'
import l10 from '../images/index/l10.png'
import l11 from '../images/index/l11.png'
import l12 from '../images/index/l12.png'
import l13 from '../images/index/l13.png'
import l14 from '../images/index/l14.png'
import l15 from '../images/index/l15.gif'
import l16 from '../images/index/l16.gif'
import l17 from '../images/index/l17.gif'
import l18 from '../images/index/l18.gif'
import l19 from '../images/index/l19.gif'
import l20 from '../images/index/l20.gif'
import l21 from '../images/index/l21.png'
import l22 from '../images/index/l22.png'
import l23 from '../images/index/l23.png'
import l24 from '../images/index/l24.png'
import l25 from '../images/index/l25.png'
import l26 from '../images/index/l26.png'
import l27 from '../images/index/l27.png'
import l28 from '../images/index/l28.png'
import l29 from '../images/index/l29.png'
import l30 from '../images/index/l30.png'
import l31 from '../images/index/l31.png'
import l32 from '../images/index/l32.png'
import l33 from '../images/index/l33.png'
import l34 from '../images/index/l34.png'
import l35 from '../images/index/l35.png'
import l36 from '../images/index/l36.png'
import l37 from '../images/index/l37.png'

import m1 from '../images/index/m1.png'
import m2 from '../images/index/m2.png'
import m3 from '../images/index/m3.png'
import m4 from '../images/index/m4.png'
import m5 from '../images/index/m5.png'
import m6 from '../images/index/m6.png'

import p1 from '../images/index/p1.png'
import p2 from '../images/index/p2.png'
import p3 from '../images/index/p3.png'
import p4 from '../images/index/p4.png'
import p5 from '../images/index/p5.png'
import p6 from '../images/index/p6.png'
import p7 from '../images/index/p7.png'
import p8 from '../images/index/p8.png'
import p9 from '../images/index/p9.png'
import p10 from '../images/index/p10.png'
import p11 from '../images/index/p11.png'

import pe1 from '../images/index/pe1.gif'
import pe2 from '../images/index/pe2.gif'
import pe3 from '../images/index/pe3.gif'
import pe4 from '../images/index/pe4.gif'
import pe5 from '../images/index/pe5.gif'

import w1 from '../images/index/w1.png'
import w2 from '../images/index/w2.png'
import w3 from '../images/index/w3.png'
import w4 from '../images/index/w4.png'
import w5 from '../images/index/w5.png'
import w7 from '../images/index/w7.png'
import w8 from '../images/index/w8.png'
import w9 from '../images/index/w9.png'
import w10 from '../images/index/w10.png'
import w11 from '../images/index/w11.png'
import w12 from '../images/index/w12.png'
import w13 from '../images/index/w13.png'
import w14 from '../images/index/w14.png'

import w1g from '../images/index/w1.gif'

// new ------------------------------------------------------------------------
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
*/

const home = () => {
  var imgClassNames = classNames({
    'img25': true,
    'img25_off': false
  });

  function test(e) {
    console.log('test is working');
    console.log(e.target);
    console.log(e.target.id);
  }
  
  return (
    <Layout id={"home"} title={"homeT"}> 
      <div className={index_gif_container}>
        {/*}
        <img src={l36} alt="sneak peek" className={index_img}/>
        <img src={p3} alt="gif" className={index_img}/>
        <img src={b1} alt="gif" className={index_img}/>
        <img src={d8} alt="sneak peek" className={index_img}/>
        <img src={l21} alt="sneak peek" className={index_img}/>
        <img src={b25} alt="sneak peek" className={index_img}/>
        <img src={l31} alt="sneak peek" className={index_img}/>
        <img src={b6} alt="gif" className={index_img}/>
        <img src={l15} alt="sneak peek" className={index_img}/>
        <img src={m6} alt="sneak peek" className={index_img}/>
        <img src={em1} alt="gif" className={index_img}/>
        <img src={p11} alt="gif" className={index_img}/>
        <img src={b9} alt="gif" className={index_img}/>
        <img src={w1} alt="gif" className={index_img}/>
        <img src={l9} alt="sneak peek" className={index_img}/>
        <img src={b11} alt="gif" className={index_img}/>
        <img src={d1} alt="gif" className={index_img}/>
        <img src={l26} alt="sneak peek" className={index_img}/>
        <img src={b2} alt="gif" className={index_img}/>
        <img src={l37} alt="sneak peek" className={index_img}/>
        <img src={w4} alt="gif" className={index_img}/>
        <img src={d3} alt="gif" className={index_img}/>
        <img src={l33} alt="sneak peek" className={index_img}/>
        <img src={e1} alt="gif" className={index_img}/>
        <img src={w10} alt="sneak peek" className={index_img}/>
        <img src={p10} alt="gif" className={index_img}/>
        <img src={b7} alt="gif" className={index_img}/>
        <img src={l1} alt="gif" className={index_img}/>
        <img src={b4} alt="gif" className={index_img}/>
        <img src={m4} alt="sneak peek" className={index_img}/>
        <img src={l2} alt="gif" className={index_img}/>
        <img src={d2} alt="gif" className={index_img}/>
        <img src={w5} alt="gif" className={index_img}/>
        <img src={b12} alt="sneak peek" className={index_img}/>
        <img src={l4} alt="gif" className={index_img}/>
        <img src={m5} alt="sneak peek" className={index_img}/>
        <img src={p1} alt="gif" className={index_img}/>
        <img src={l5} alt="gif" className={index_img}/>
        <img src={b10} alt="gif" className={index_img}/>
        <img src={l23} alt="sneak peek" className={index_img}/>
        */}
        {/* <img src={pe1} alt="gif" className={index_img}/> */}
        {/*}
        <img src={l16} alt="sneak peek" className={index_img}/>
        <img src={w8} alt="sneak peek" className={index_img}/>
        <img src={l13} alt="sneak peek" className={index_img}/>
        <img src={b20} alt="sneak peek" className={index_img}/>
        <img src={w1g} alt="gif" className={index_img}/>
        <img src={l35} alt="sneak peek" className={index_img}/>
        <img src={b16} alt="sneak peek" className={index_img}/>
        <img src={p4} alt="gif" className={index_img}/>
        <img src={l6} alt="gif" className={index_img}/>
        <img src={b26} alt="sneak peek" className={index_img}/>
        <img src={l22} alt="sneak peek" className={index_img}/>
        <img src={b8} alt="gif" className={index_img}/>
        <img src={w2} alt="gif" className={index_img}/>
        <img src={p2} alt="gif" className={index_img}/>
        <img src={b28} alt="sneak peek" className={index_img}/>
        <img src={l12} alt="sneak peek" className={index_img}/>
        <img src={p6} alt="gif" className={index_img}/>
        <img src={e2} alt="gif" className={index_img}/>
        <img src={l29} alt="sneak peek" className={index_img}/>
        <img src={b18} alt="sneak peek" className={index_img}/>
        <img src={l32} alt="sneak peek" className={index_img}/>
        <img src={p7} alt="gif" className={index_img}/>
        <img src={em3} alt="gif" className={index_img}/>
        <img src={p8} alt="gif" className={index_img}/>
        <img src={l7} alt="gif" className={index_img}/>
        <img src={b21} alt="sneak peek" className={index_img}/>
        <img src={d9} alt="sneak peek" className={index_img}/>
        <img src={l25} alt="sneak peek" className={index_img}/>
        <img src={m1} alt="sneak peek" className={index_img}/>
        <img src={b22} alt="sneak peek" className={index_img}/>
        <img src={d5} alt="sneak peek" className={index_img}/>
        <img src={l18} alt="sneak peek" className={index_img}/>
        */}
        {/* <img src={pe2} alt="gif" className={index_img}/> */}
        {/*
        <img src={b23} alt="sneak peek" className={index_img}/>
        <img src={l8} alt="gif" className={index_img}/>
        <img src={w9} alt="sneak peek" className={index_img}/>
        <img src={p5} alt="gif" className={index_img}/>
        <img src={l19} alt="sneak peek" className={index_img}/>
        <img src={d6} alt="sneak peek" className={index_img}/>
        <img src={b17} alt="sneak peek" className={index_img}/>
        <img src={l24} alt="sneak peek" className={index_img}/>
        <img src={w7} alt="gif" className={index_img}/>
        */}
        {/* <img src={pe5} alt="sneak peek" className={index_img}/> */}
        {/*<img src={b15} alt="sneak peek"/>*/}
        {/*
        <img src={l34} alt="sneak peek" className={index_img}/>
        <img src={p9} alt="gif" className={index_img}/>
        <img src={d7} alt="sneak peek" className={index_img}/>
        */}
        {/*<img src={b3} alt="gif"/>*/}
        {/*
        <img src={l3} alt="gif" className={index_img}/>
        <img src={d10} alt="sneak peek" className={index_img}/>
        <img src={b24} alt="sneak peek" className={index_img}/> 
        <img src={l10} alt="sneak peek" className={index_img}/>
        <img src={w11} alt="sneak peek" className={index_img}/>
        */}
        {/* <img src={pe4} alt="sneak peek" className={index_img}/> */}
        {/*
        <img src={b27} alt="sneak peek" className={index_img}/>
        <img src={l11} alt="sneak peek" className={index_img}/>
        <img src={b13} alt="sneak peek" className={index_img}/>
        <img src={w3} alt="gif" className={index_img}/>
        <img src={l14} alt="sneak peek" className={index_img}/>
        <img src={b5} alt="gif" className={index_img}/>
        <img src={l17} alt="sneak peek" className={index_img}/>
        <img src={em2} alt="gif" className={index_img}/>
        <img src={b14} alt="sneak peek" className={index_img}/>
        */}
        {/* <img src={pe3} alt="sneak peek" className={index_img}/> */}
        {/*
        <img src={m2} alt="sneak peek" className={index_img}/>
        <img src={l20} alt="sneak peek" className={index_img}/>
        <img src={l27} alt="sneak peek" className={index_img}/>
        <img src={d4} alt="sneak peek" className={index_img}/>
        <img src={l28} alt="sneak peek" className={index_img}/>
        <img src={b19} alt="sneak peek" className={index_img}/>
        <img src={l30} alt="sneak peek" className={index_img}/>
        */}

        

      </div>
    </Layout>
  )
}

export default home

export const Head = () => <title>Maggie Jiaxu Chang</title>
