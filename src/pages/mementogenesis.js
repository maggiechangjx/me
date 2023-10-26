import React from 'react';
import Layout from "../components/layout";
import Video from "../components/video";

import {
   memento_img_h_full,
   memento_img_h_full_margins,
   memento_img_h60,
   memento_img_h50,
   memento_img_h33,
   memento_img_h25,
   memento_img_v,
   memento_flexbox,
   memento_flexbox_1row,
   memento_flexitem_gif,
   memento_mutation_gif,
   memento_flex_microscopy_img,
   v_img_96
} from '../style/images.module.css'

import {
   memento_narrative,
   memento_subtitlem,
   in_page_subtitle,
   in_page_text,
   in_page_textbox,
} from '../style/text.module.css'

import {
   memento_intro,
   section_divider,
   section_divider_blank,
   subsection_divider,
   subsection_divider2,
   header_footer_space
} from '../style/divider.module.css'

import fam_tree1 from '../images/mem/fam-tree1.png'
import fam_tree2 from '../images/mem/fam-tree2.png'
import fam_tree3 from '../images/mem/fam-tree3.png'
import fam_tree4 from '../images/mem/fam-tree4.png'

import ft_sketch1 from '../images/mem/ft-sketch1.jpg'
import ft_sketch2 from '../images/mem/ft-sketch2.jpg'
import ft_sketch3 from '../images/mem/ft-sketch3.jpg'

import connect_at from '../images/mem/connect-at.png'
import connect_cg from '../images/mem/connect-cg.png'
import lang_structure from '../images/mem/lang-structure.png'
import module1 from '../images/mem/module1.png'
import module2 from '../images/mem/module2.png'
import microscopy3 from '../images/mem/microscopy3.jpg'
import microscopy4 from '../images/mem/microscopy4.jpg'
import microscopy5 from '../images/mem/microscopy5.jpg'
import microscopy_zoom1 from '../images/mem/microscopy-zoom1.jpg'
import microscopy_zoom2 from '../images/mem/microscopy-zoom2.jpg'
import microscopy_zoom3 from '../images/mem/microscopy-zoom3.jpg'
import microscopy_40x_gif1 from '../images/mem/microscopy-40x-1.gif'
import microscopy_40x_gif2 from '../images/mem/microscopy-40x-2.gif'
import microscopy_1000x_gif1 from '../images/mem/microscopy-1000x-1.gif'
import microscopy_1000x_gif2 from '../images/mem/microscopy-1000x-2.gif'

import lang_coil from '../images/mem/lang-coil.png'

import midjourney from '../images/mem/midjourney.png'
import lang_mutation1 from '../images/mem/lang-mutation1.gif'
import lang_mutation2 from '../images/mem/lang-mutation2.gif'
import lang_mutation3 from '../images/mem/lang-mutation3.gif'
import lang_mutation4 from '../images/mem/lang-mutation4.gif'
import lang_mutation5 from '../images/mem/lang-mutation5.gif'
import lang_mutation6 from '../images/mem/lang-mutation6.gif'

import render_lang_a from '../images/mem/render-lang-a.png'
import render_lang_c from '../images/mem/render-lang-c.png'
import render_lang_g from '../images/mem/render-lang-g.png'
import render_lang_t from '../images/mem/render-lang-t.png'
import render_lang_at from '../images/mem/render-lang-at.png'
import render_lang_cg from '../images/mem/render-lang-cg.png'
import render_spiral1 from '../images/mem/render-spiral1.png'
import render_spiral2 from '../images/mem/render-spiral2.png'
import render_spiral3 from '../images/mem/render-spiral3.png'
import render_stack1 from '../images/mem/render-stack1.png'
import render_stack2 from '../images/mem/render-stack2.png'
import render_stack3 from '../images/mem/render-stack3.png'

const settings = {
   dots: true,
   infinite: true,
   slidesToShow: 1,
   slidesToScrollL: 1
 };

const mementoPage = () => {

   const checkScroll = () => {
      console.log(window.scrollY);
      console.log('total height: ' + window.scrollHeight);
   }
   if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkScroll);
   }


   { /*
   https://stackoverflow.com/questions/57490032/how-to-add-navbar-links-highlight-on-section-scrolling-or-clicking-on-it-without
   https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   https://legacy.reactjs.org/docs/events.html#mouse-events
   https://www.youtube.com/watch?v=JMsNslI8KoY&ab_channel=BrianDesign

   https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/
   https://www.youtube.com/watch?v=r1auJEf9ISo&ab_channel=ColbyFayock 

   onMouseOver React: https://linguinecode.com/post/how-to-add-onmouseenter-or-onmouseover-in-reactjs 
   */ }


   const mouseOverEvent = () => {
      console.log('mouseover');
      /* TRY TO TRIGGER CHANGE IN NAV USING MOUSEOVER EVENT LISTENER */
   }

   return (
     <Layout id="mementogenesis" title="mementogenesisT">
         

         <p className={in_page_subtitle} id="family_tree_scroll" onMouseOver={mouseOverEvent}>
            Family Tree of Twins</p>
         <div className={in_page_textbox}>
            <p className={in_page_text}>
               Each family unit is responsible for storing their own generational memories and a 
               portion of the social collective data. As an attempt to prevent the loss of data, 
               each family unit must give birth to twins and store a copy of the data in each twin. 
               A family tree of 7 generations is visualized in 3D.
            </p>
         </div>

         <img src={fam_tree1} className={memento_img_h_full} alt="family tree"/>
         <div className={memento_flexbox}>
            <img src={fam_tree2} className={memento_img_h50} alt="family tree"/>
            <img src={fam_tree3} className={memento_img_h50} alt="family tree"/>
         </div>
         <img src={fam_tree4} className={memento_img_h_full} alt="family tree"/>
         <Video url="https://www.youtube.com/embed/mRf_AaNspP0?si=TpwbnRPdqCuUuzgq" title="Family Tree Panning"></Video>
        
         <div className={memento_flexbox_1row}>
            <img src={ft_sketch1} className={memento_img_h33} alt=""/>
            <img src={ft_sketch2} className={memento_img_h33} alt=""/>
            <img src={ft_sketch3} className={memento_img_h33} alt=""/>
         </div>
         
         <div className={section_divider_blank}> </div>
         <p className={in_page_subtitle} id="module_scroll" onMouseOver={mouseOverEvent}>
            Twin Modules</p>
         <div className={in_page_textbox}>
            <p className={in_page_text}>Modular visualizations following the structure of the 
            family tree: two base modules pair together to create two new twin modules.</p>
         </div>

         <div className={memento_flexbox}>
            <img src={module1} className={memento_img_h50} alt=""/>
            <img src={module2} className={memento_img_h50} alt=""/>
         </div>

         <div className={section_divider_blank}></div>
         <p className={in_page_subtitle} id="microscopy_scroll" onMouseOver={mouseOverEvent}>
            Microscopy, Mutation, Language</p>
         <div className={in_page_textbox}>
            <p className={in_page_text}>
            A preliminary, mutating language system based off of the structure of DNA, 
            drawing inspiration from examining my own tissue under a microscope and experimenting 
            with machine learning algorithms as visualization methods. 
            <br/><br/>   
            Invisible to the human eye, DNA is often understood through cerebral means. 
            Hoping to approximate an embodied experience of working with DNA, I extracted, 
            broke down, and observed my cheek cells under 400x and 1000x magnification.
            While it is impossible to see the actual strands of DNA at these levels,
            this process reveals the importance of perceiving 
            beyond human scales. With the help of interfaces, worlds reveal themselves in different 
            orders of mangnitude.
            </p>
         </div>

         <div className={memento_flexbox}>
            <img src={microscopy_40x_gif1} className={memento_flexitem_gif} alt=""/>
            <img src={microscopy_40x_gif2} className={memento_flexitem_gif} alt=""/>
         </div>
         <div className={memento_flexbox}>
            {/* <img src={microscopy1} className={memento_flex_microscopy_img} alt=""/> */} 
            <img src={microscopy4} className={memento_flex_microscopy_img} alt=""/>
            <img src={microscopy3} className={memento_flex_microscopy_img} alt=""/>
            <img src={microscopy5} className={memento_flex_microscopy_img} alt=""/>
         </div>
         <p><br/></p>
         <div className={memento_flexbox}>
            <img src={microscopy_1000x_gif1} className={memento_flexitem_gif} alt=""/>
            <img src={microscopy_1000x_gif2} className={memento_flexitem_gif} alt=""/>
         </div>
         <div className={memento_flexbox}>
            <img src={microscopy_zoom2} className={memento_flex_microscopy_img} alt=""/>
            <img src={microscopy_zoom1} className={memento_flex_microscopy_img} alt=""/>
            <img src={microscopy_zoom3} className={memento_flex_microscopy_img} alt=""/>
            {/* <img src={microscopy_zoom4} className={memento_flex_microscopy_img} alt=""/> */}
         </div>

         <div className={subsection_divider}></div>

         <div className={in_page_textbox}>
            <p className={in_page_text}>
            If language is an interface, what might be the language of DNA? A preliminary language system is 
            developed based on the structure of DNA's chemical bases. As adenine is paired to thymine, 
            and cytosine is paired to guanine, 
            such pairing patterns are applied to the structure of the language glyphs. 
            As the strands of DNA coil together 
            to form chromosomes, the glypcs can link to each other, expand, and contract. 
            </p>
         </div>
         <img src={lang_coil} className={memento_img_h60} alt=""/>
         <img src={lang_structure} className={memento_img_h60} alt=""/>
         <img src={connect_at} className={memento_img_h60} alt=""/>
         <img src={connect_cg} className={memento_img_h60} alt=""/>

         <div className={subsection_divider}></div>
         <div className={in_page_textbox}>
            <p className={in_page_text}>
            Since the data stored within 
            DNA can be subject to mutate, I visualized a set of possible mutations using Midjourney. 
            The outputs were then compiled into motion with the help of RunwayML's Frame Interpolation 
            algorithm. If the basis of the language is in constant flux, the rereading of history 
            in this world will always be an archeological act as people reread and reinterpret the 
            data within their own bodies.
            </p>
         </div>
         <img src={midjourney} className={memento_img_h_full} alt=""/>
         <div className={subsection_divider2}></div>
         <div className={memento_flexbox}>
            <img src={lang_mutation1} className={memento_mutation_gif} alt=""/>
            <img src={lang_mutation2} className={memento_mutation_gif} alt=""/>
            <img src={lang_mutation3} className={memento_mutation_gif} alt=""/>
            <img src={lang_mutation4} className={memento_mutation_gif} alt=""/>
            <img src={lang_mutation5} className={memento_mutation_gif} alt=""/>
            <img src={lang_mutation6} className={memento_mutation_gif} alt=""/>
         </div>
         
         <div className={subsection_divider}></div>

         {/*}
         <p className={in_page_subtitle} id="language_system_scroll" onMouseOver={mouseOverEvent}>
            Language System</p>
         <div className={in_page_textbox}>
            <p className={in_page_text}>A preliminary language system is made following the structure 
            and composition of DNA.</p>
         </div>
         */}

<        div className={in_page_textbox}>
            <p className={in_page_text}>
            The language modules were also rendered in Blender and spatialized.
            </p>
         </div>

         <div className={memento_flexbox}>
            <img src={render_lang_a} className={memento_img_h25} alt=""/>
            <img src={render_lang_c} className={memento_img_h25} alt=""/>
            <img src={render_lang_g} className={memento_img_h25} alt=""/>
            <img src={render_lang_t} className={memento_img_h25} alt=""/>
         </div>

         <div className={memento_flexbox}>
            <img src={render_lang_at} className={memento_img_h50} alt=""/>
            <img src={render_lang_cg} className={memento_img_h50} alt=""/>
         </div>

         <div className={subsection_divider2}></div>

         <img src={render_spiral1} className={memento_img_h_full} alt=""/>
         <img src={render_spiral2} className={memento_img_h_full} alt=""/>
         <img src={render_spiral3} className={memento_img_h_full} alt=""/>

         <div className={subsection_divider2}></div>

         <img src={render_stack1} className={v_img_96} alt=""/>
         <img src={render_stack2} className={v_img_96} alt=""/>
         <img src={render_stack3} className={v_img_96} alt=""/>
         
         <div className={header_footer_space}></div>
      </Layout>
   )
 }
 
 export default mementoPage