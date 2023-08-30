import React from "react";
import Layout from "../components/layout"
import Carousel from "../components/Carousel"

import Slider from "react-slick";
import "../style/slick.module.css"
import "../style/slick.module.css"
// import "slick-carousel/slick/slick-theme.css";

import {
    img_size
} from "../style/carousel.module.css"

import render_stack1 from '../images/mem/render-stack1.png'
import render_stack2 from '../images/mem/render-stack2.png'
import render_stack3 from '../images/mem/render-stack3.png'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScrollL: 1
  }

const carousel = () => {
    return (
        <Layout id="carouselTest" title="carouselTestT">
            <Carousel></Carousel>
        </Layout>
    )
}

export default carousel