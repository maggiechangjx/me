// https://www.youtube.com/watch?v=CMg_1KxpM_4&ab_channel=DeveloperGeorge

import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import {
    carousel,
    inner,
    carousel_item,
    carousel_img,
    carousel_item_text,
    carousel_buttons,
    button_arrow,
    indicators,
    indicator_buttons,
    indicator_symbol,
    indicator_symbol_active,
    material_symbols_outlined } from "../style/carousel.module.css";

import "../style/carousel.module.css";
 
import stack2 from "../images/mem/render-stack2.png"


const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            description: "descriptions1",
            img: require("../images/mem/render-stack1.png"),
        },
        {
            description: "descriptions2",
            img: require("../images/mem/render-stack2.png"),
        },
        {
            description: "desc",
            img: require("../images/mem/render-stack3.png"),
        },
    ];

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        }
        else if ( newIndex >= items.length ) {
            newIndex = items.length - 1;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className={carousel}>
            <div className={inner}
                style = {{transform: `translate: (-${activeIndex * 100}%)`}}>
                {items.map((item)=>{
                    return <CarouselItem item={item}/>;
                })}
            </div>

            <div className={carousel_buttons}>
                {/* left arrow */}
                <button onClick={() => { updateIndex(activeIndex - 1); }} className={button_arrow}>
                    {/*<span className={material_symbols_outlined}>arrow_back_ios_new</span>*/}
                    <svg height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.143 309.143">
                    <path d="M112.855,154.571L240.481,26.946c2.929-2.929,2.929-7.678,0-10.606L226.339,2.197
                        C224.933,0.79,223.025,0,221.036,0c-1.989,0-3.897,0.79-5.303,2.197L68.661,149.268c-2.929,2.929-2.929,7.678,0,10.606
                        l147.071,147.071c1.406,1.407,3.314,2.197,5.303,2.197c1.989,0,3.897-0.79,5.303-2.197l14.142-14.143
                        c2.929-2.929,2.929-7.678,0-10.606L112.855,154.571z"/></svg>
                </button>

                <div className={indicators}>
                    {items.map((item, index) => {
                        return (
                            <button className={indicator_buttons} onClick= {() => { updateIndex(index); }}>
                                <span className={`material_symbols_outlined ${
                                index === activeIndex ? indicator_symbol_active : indicator_symbol}`}>
                                    test
                                    {/* <svg width=".5vw" height=".5vw" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16"/></svg> */}
                                </span>
                                
                            </button>
                        );
                    })}       
                </div>
                {/* right arrow */}
                <button onClick={() => { updateIndex(activeIndex + 1); }} className={button_arrow}>
                    {/*<span className={'material_symbols_outlined'}>arrow_forward_ios</span>*/}
                    <svg height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.143 309.143">
                    <path d="M240.481,149.268L93.41,2.197c-2.929-2.929-7.678-2.929-10.606,0L68.661,16.34
                        c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l127.626,127.625L68.661,282.197
                        c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l14.143,14.143c1.464,1.464,3.384,2.197,5.303,2.197
                        c1.919,0,3.839-0.732,5.303-2.197l147.071-147.071C243.411,156.946,243.411,152.197,240.481,149.268z"/></svg>
                </button>
                
            </div>

        
        </div>
    )
};

export default Carousel

