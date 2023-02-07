import React, {useEffect,Suspense} from "react";
import AOS from "aos";
import {
    AboutMainContainer,
    ShadowContainer,
    Container,
    BlockDesc, TitleDesc,
    BoxDesc, SubDesc, PhotoContainer
} from './StyleAbout/AboutHeaderStyle'
import chef from '../../Assets/images/cheef.jpg';
import {Helmet} from "react-helmet";

const Loader = React.lazy(() => import('../../Components/Loader/Loader'));

const AboutHeader = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
       <Suspense fallback={<Loader/>}>
           <AboutMainContainer>
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>AkSkamnur haqida malumot</title>
                   <meta name="description" content="Restoranimiz tarixi" />
                   <meta name="description" content="Professional oshpaz, Professional ishchilar " />
                   <meta name="description"
                         content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                   <meta name="keywords"
                         content="Mazalli taomlar, taomlar, milliy taomlar, sharxon milliy taomlari, uzbek milliy taomlari"/>
                   <meta name="keywords" content={`akshamnur, akshamnur haqida, top restoran, shaxrixon resoran`}/>
                   <link rel="canonical" href="https://akshamnur.uz/"/>
               </Helmet>
               <PhotoContainer src={chef}>
                   <ShadowContainer>
                       <Container>
                           <BlockDesc data-aos="fade-up">
                               <BoxDesc>
                                   <TitleDesc data-aos="fade-up" data-aos-delay="500">Biz Haqimizda</TitleDesc>
                                   <SubDesc data-aos="fade-up" data-aos-delay="1000">
                                       Restoranimiz AkShamNur binosi 2022 yilda ochilgan bo’lib, shu kungacha
                                       muvaffaqiyatli faoliyat yuritib kelmoqdaligini bilarmidingiz? 1 yil davomida
                                       kompaniya
                                       zamonaviy, kengaytirilgan tarmoqqa
                                       aylandi, u bugungi kunda O‘zbekiston bo‘ylab tez rivojlanayotgan restoranlardan
                                       biridir, o‘zining eng tezkor yetkazib berish xizmatini, zamonaviy
                                       IT-infratuzilmasini va 50 dan ortiq
                                       xodimlarni o‘z ichiga oladi.
                                   </SubDesc>
                               </BoxDesc>
                           </BlockDesc>
                       </Container>
                   </ShadowContainer>
               </PhotoContainer>
           </AboutMainContainer>
       </Suspense>
    )
}
export default AboutHeader
