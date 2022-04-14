import React from "react"
import {connect} from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import "./Soft.css"

import soft1 from "../../media/soft1.png"
import soft2 from "../../media/soft2.png"
import soft3 from "../../media/soft3.png"
import soft4 from "../../media/soft4.png"
import star from "../../media/features.png"

function Soft (props) {
    const info = props.info
    return (
        <>
            <section id="softCarousel">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination
                >
                    <SwiperSlide className="slide">
                        <img className="softBanner" src={soft1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img className="softBanner" src={soft2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img className="softBanner" src={soft3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img className="softBanner" src={soft4} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section id="upperProduct">
                <img id="softSmallBanner" src={info.img} alt="" srcset=""/>
                <div className="productDescSection">
                    <h1>{info.head}</h1>
                    <div className="productDesc">{info.descr}</div>
                </div>
            </section>
            <section id="features">
                <h1>Features</h1>
                <div id="featureList">
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature1}</h3>
                        <span className="featureDesc">{info.feature1desc}</span>
                    </div>
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature2}</h3>
                        <span className="featureDesc">{info.feature2desc}</span>
                    </div>
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature3}</h3>
                        <span className="featureDesc">{info.feature3desc}</span>
                    </div>
                </div>
            </section>
            <button onClick={props.specs} id="learnMore">Documentations</button>
        </>  
        
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
            specs: () => deploy({type:"specs"}),
        }
    )
}
export default connect(mapState, mapAct)(Soft)