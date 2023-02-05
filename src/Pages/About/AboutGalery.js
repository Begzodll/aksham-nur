import {connect} from "react-redux";
import {
    GalleryMainContainer,
    Block,
    BlockItem,
    SwiperImage,
    AdvantagesArea,
    ImageItem, TextArea,
    PathSwiper, MainTitle, BlockQuotes,
    Quotes
} from "./StyleAbout/AboutHeaderStyle";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useRef} from "react";

import {Autoplay, Navigation} from "swiper";
import AOS from "aos";

const AboutGallery = ({aboutSection}) => {

    const navPrev = useRef(null);
    const navNext = useRef(null);

    const getCountElement = () => 1

    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])


    return (
        <GalleryMainContainer>
            <Block  data-aos="fade-up">
                <BlockItem>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={getCountElement()}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            prevEl: navPrev.current,
                            nextEl: navNext.current
                        }}
                        onBeforeInit={(swiper => {
                            swiper.params.navigation.prevEl = navPrev.current
                            swiper.params.navigation.nextEl = navNext.current
                        })}
                        autoplay={{
                            delay: 1500,
                        }}
                        style={{margin:'0',padding:"0"}}
                        data-aos="fade-right" data-aos-delay="500"
                    >
                        {
                            aboutSection.gallery.photos.map((item, index) => (
                                <SwiperSlide key={index + 1}>
                                    <PathSwiper>
                                        <ImageItem src={item.photo} alt={item.photo}/>
                                    </PathSwiper>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </BlockItem>
                <BlockItem>
                    <TextArea data-aos="fade-left">
                        <MainTitle >{aboutSection.gallery.textHeader}</MainTitle>
                        <BlockQuotes>
                            {
                                aboutSection.gallery.tick.map(item => <div key={item.id}>
                                    <Quotes icon={item.svg}>{item.text}</Quotes>
                                </div>)
                            }
                        </BlockQuotes>
                    </TextArea>
                </BlockItem>
            </Block>
        </GalleryMainContainer>
    )
}
export default connect(({dataProduct: {aboutSection}}) => ({aboutSection}))(AboutGallery)