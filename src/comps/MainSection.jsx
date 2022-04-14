import React from "react"
import {connect} from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import banner1 from "../media/banner1.jpg"
import banner2 from "../media/banner2.jpg"
import banner3 from "../media/banner3.jpg"
import banner4 from "../media/banner4.jpg"

import "./MainSection.css";
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MainSection (props) {
    return (
        <main>
            <div id="mainWrapper">
                <div id="banner" onClick={props.about}></div>
            </div>
            <section id="carousel">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination
                    navigation
                >
                    <SwiperSlide className="slide">
                        <img onClick={props.maint} className="smallBanner" src={banner1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img onClick={props.sec} className="smallBanner" src={banner2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img onClick={props.about} className="smallBanner" src={banner3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img onClick={props.specs} className="smallBanner" src={banner4} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section id="story">
                <h1>Success Stories</h1>
                <div id="storyBlocks">
                    <div id="butBlock">
                        <div onClick={props.own1} className="successBut">Virtualisation Stories</div>
                        <div onClick={props.own2} className="successBut">Hosting Stories</div>
                        <div onClick={props.hpc} className="successBut">HPC Stories</div>
                    </div>
                    <div id="storyImgs">
                        <div id="fstoryImg">

                        </div>
                        <div id="secstoryImg">

                        </div>
                    </div>
                </div>
            </section>
            <button onClick={props.about} id="learnMore">
                Learn More
            </button>
        </main>
    )
}
const mapState = (state) => {
    return ({
        state:state
    })
}

const mapAct = (deploy) => {
    return (
        {
            hpc: () => deploy({type:"hpc"}),
            own1: () => deploy({type:"own1"}),
            own2: () => deploy({type:"own2"}),
            about: () => deploy({type:"about"}),
            sec: () => deploy({type:"sec"}),
            maint: () => deploy({type:"maint"}),
            specs: () => deploy({type:"specs"}),
        }
    )
}

export default connect(mapState, mapAct)(MainSection)