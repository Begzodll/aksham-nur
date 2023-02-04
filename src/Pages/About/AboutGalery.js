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
import React, {useRef} from "react";

import {Autoplay, Navigation} from "swiper";

const AboutGallery = ({aboutSection}) => {

    const navPrev = useRef(null);
    const navNext = useRef(null);

    const getCountElement = () => 1

    return (
        <GalleryMainContainer>
            <Block>
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
                    <TextArea>
                        <MainTitle>{aboutSection.gallery.textHeader}</MainTitle>
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