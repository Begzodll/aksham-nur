// import React, {useRef} from "react";
// import Style from './footer.module.scss';
//
// import {DoubleButton} from "../Buttons/pageButtons";
//
// import {useWindowDimensions} from "../../helpers/windowDimensions";
// import {Navigation, Autoplay} from "swiper";
// import {Swiper, SwiperSlide} from 'swiper/react';
//
// // import {content} from "../../db/DataBase";
//
//
// function Footer() {
//
//
//     const navigatePrev = useRef(null);
//     const navigateNext = useRef(null);
//     const [width] = useWindowDimensions();
//
//     const getCountElement = () => {
//         if (width > 1400) return 5;
//
//         if (width > 1200) return 4;
//
//         if (width > 992) return 3;
//
//         if (width > 768) return 2;
//
//         if (width > 480) return 2;
//
//         return 1
//     }
//
//
//     return <div className={Style.footer}>
//         <div className={Style.footer__controller}>
//             <div className={Style.footer__controller__text}>
//                 <p>Hamkorlarimiz</p>
//                 <p>Biz <b>siz bilan</b> hamkorlik qilishdan <b>mamnunmiz!</b></p>
//             </div>
//             <DoubleButton color={'#F7C844'} prev={navigatePrev} next={navigateNext}/>
//         </div>
//         <div className={Style.footer__carousel__swiper}>
//             <Swiper
//                 modules={[Navigation, Autoplay]}
//                 slidesPerView={getCountElement()}
//                 spaceBetween={110}
//                 loop={true}
//                 navigation={{
//                     prevEl: navigatePrev.current,
//                     nextEl: navigateNext.current
//                 }}
//                 onBeforeInit={(swiper => {
//                     swiper.params.navigation.prevEl = navigatePrev.current
//                     swiper.params.navigation.nextEl = navigateNext.current
//                 })}
//                 autoplay={{
//                     delay: 1500,
//                     disableOnInteraction: true
//                 }}
//             >
//                 {
//                     content.footer.swiper.map((item, index) => (
//                         <SwiperSlide key={index + 1}>
//                             <div className={Style.footer__carousel__swiper__item}>
//                                 <img src={item.img} alt={item.img}/>
//                             </div>
//                         </SwiperSlide>
//                     ))
//                 }
//             </Swiper>
//         </div>
//         <div className={Style.footer__line}/>
//
//         <div className={Style.footer__contact}>
//             <div className={Style.footer__contact__title}>
//                 <p>british<span>house</span></p>
//                 <p>learning center</p>
//             </div>
//
//             <div className={Style.footer__contact__media}>
//                 <p>&copy; BritishHouse learning center | created by <a href='https://t.me/begzodll' style={{textDecoration:'none', color:'#f7c844'}}>Bek-Dev</a></p>
//                 <div className={Style.footer__contact__media__icon}>
//                     {
//                         content.footer.svg.map((item, index) => (
//                             <a key={index + 1} href={`${item.href ? item.href : '#'}`}>{item.icon}</a>
//                         ))
//                     }
//                 </div>
//             </div>
//             <div className={Style.footer__contact__number}>
//                 <a href={'tel:998916168020'}>+998 91 616 80 20</a>
//                 <p>murojat uchun</p>
//             </div>
//         </div>
//
//         <div className={Style.footer__tablet}>
//             <p>&copy; BritishHouse learning center | created by <a href='https://t.me/begzodll' style={{textDecoration:'none', color:'#f7c844'}}>Bek-Dev</a> </p>
//             <div className={Style.footer__tablet__icon}>
//                 {
//                     content.footer.svg.map((item, index) => (
//                         <span key={index + 1}>{item.icon}</span>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
// }
//
// export default Footer