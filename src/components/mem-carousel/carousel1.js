import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    memento_img_h, 
    memento_img_h_full,
    memento_img_h80,
    memento_img_h60,
    memento_img_h50,
    memento_img_h33,
    memento_img_v,
    memento_flexbox,
    memento_flexitem,
    memento_flexitem_gif,
    memento_mutation_gif,
    memento_flex_microscopy_img } from '../../style/images.module.css'

import render_stack1 from '../../images/mem/render-stack1.png'
import render_stack2 from '../../images/mem/render-stack2.png'
import render_stack3 from '../../images/mem/render-stack3.png'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScrollL: 1
  }

const Carousel1 = () => {
    return (
        <div>
        <p>carousel test</p>
        <Slider {...settings}>
          <div>
            <img src={render_stack3} className={memento_img_h33} alt=""/>
          </div>
          <div>
          <img src={render_stack2} className={memento_img_h33} alt=""/>
          </div>
          <div>
          <img src={render_stack1} className={memento_img_h33} alt=""/>
          </div>
        </Slider>
        </div>

        
    )
}

export default Carousel1