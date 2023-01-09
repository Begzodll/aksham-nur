import React, {useRef} from "react";
import Style from './footer.module.scss';

import {DoubleButton} from "../Buttons/Buttons";
import {useWindowDimensions} from "../../Helpers/WindowSize";

import {Navigation, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import partner from '../../Assets/Partner/BTS.jpeg';
import logo from '../../Assets/images/logo/logo2.png'


function Footer() {

    const content = [
        {id:1,img:partner},
        {id:2,img:partner},
        {id:3,img:partner},
        {id:4,img:partner},
        {id:5,img:partner},
        {id:6,img:partner},
        {id:7,img:partner},
    ]

    const navigatePrev = useRef(null);
    const navigateNext = useRef(null);
    const [width] = useWindowDimensions();

    const getCountElement = () => {
        if (width > 1400) return 5;

        if (width > 1200) return 4;

        if (width > 992) return 3;

        if (width > 768) return 2;

        if (width > 480) return 2;

        return 1
    }


    return <div className={Style.footer}>
        <div className={Style.footer__controller}>
            <div className={Style.footer__controller__text}>
                <p>Hamkorlarimiz</p>
                <p>Biz <b>siz bilan</b> hamkorlik qilishdan <b>mamnunmiz!</b></p>
            </div>
            <DoubleButton color={'#F7C844'} prev={navigatePrev} next={navigateNext}/>
        </div>
        <div className={Style.footer__carousel__swiper}>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={getCountElement()}
                spaceBetween={110}
                loop={true}
                navigation={{
                    prevEl: navigatePrev.current,
                    nextEl: navigateNext.current
                }}
                onBeforeInit={(swiper => {
                    swiper.params.navigation.prevEl = navigatePrev.current
                    swiper.params.navigation.nextEl = navigateNext.current
                })}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true
                }}
            >
                {
                    content.map((item, index) => (
                        <SwiperSlide key={index + 1}>
                            <div className={Style.footer__carousel__swiper__item}>
                                <img src={item.img} alt={item.img}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className={Style.footer__line}/>

        <div className={Style.footer__contact}>
            <div className={Style.footer__contact__title}>
                <img className={Style.footer__contact__title__logo} src={logo} alt={'logo'}/>
            </div>

            <div className={Style.footer__contact__media}>
                <p>&copy; Akshamnur cafe | Invented 2023 </p>
                <div className={Style.footer__contact__media__icon}>
                    {/*{*/}
                    {/*    content.footer.svg.map((item, index) => (*/}
                    {/*        <a key={index + 1} href={`${item.href ? item.href : '#'}`}>{item.icon}</a>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
            <div className={Style.footer__contact__number}>
                <a href={'tel:998335558080'}>+998 33 555 80 80</a>
                <p>murojat uchun</p>
            </div>
        </div>

        <div className={Style.footer__tablet}>
            <p>&copy; Akshamnur cafe | Invented 2023 </p>
            <div className={Style.footer__tablet__icon}>
                {/*{*/}
                {/*    content.footer.svg.map((item, index) => (*/}
                {/*        <span key={index + 1}>{item.icon}</span>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        </div>
    </div>
}

export default Footer