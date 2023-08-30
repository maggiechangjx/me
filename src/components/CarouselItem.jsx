import React from 'react'
import {
    carousel_item,
    carousel_item_text,
    carousel_img,
} from "../style/carousel.module.css"

const CarouselItem = ({ item }) => {
    return (
        <div className={carousel_item}>
            <div></div>
            <div className={carousel_item_text}> {item.description} </div>
            <img className={carousel_img} src={item.img.default} />
        </div>
    );
};

export default CarouselItem