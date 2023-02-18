import React, {useEffect,Suspense} from "react";
import {Helmet} from "react-helmet";
import AOS from 'aos';

import {BannerBackground, BtnGroup, BtnOrder, MainText, ShadowContainer, SubText} from "./style/HeaderStyle";

import banner from '../../Assets/images/home-bg/v-3.jpg';

const bannerMobile = React.lazy(() => import('../../Assets/images/home-bg/mobile2.jpg'));
const Loader = React.lazy(() => import('../../Components/Loader/Loader'));

const HomeSection = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])

    return (
        <Suspense fallback={<Loader/>}>
            <Helmet>
                <meta charSet="UTF-8"/>
                <title>AkShamNur Bosh saxifa</title>
                <meta name="description" content="Uzbek milliy mazali taomlari"/>
                <meta name="keywords" content="akshamnur, akshamnur uz, akshamnur restorani, akshamnur uzbekistan, shaxrihon restorani, akshamnur cafe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.akshamnur.uz/"/>

                <meta name="description" content="Aksham Nurga xush kelibsiz" />
                <meta name="description" content="Biz sizni kutayotgan edik" />
                <link rel="canonical" href="https://akshamnur.uz/"/>
            </Helmet>
            <BannerBackground src={banner} mobile={bannerMobile}>
                <ShadowContainer>
                    <MainText data-aos="fade-up" >Aksham Nurga xush kelibsiz</MainText>
                    <SubText data-aos="fade-up" data-aos-delay="500">Biz sizni kutayotgan edik <br/> Biz sizni shirin taom bilan jazolaymiz</SubText>
                    <BtnGroup>
                        <BtnOrder href={'#menu'} data-aos="fade-right" data-aos-delay="1000">Buyurtma berish</BtnOrder>
                        <BtnOrder href="tel:998335558080" data-aos="fade-left" data-aos-delay={"1000"}>Bo'glanish</BtnOrder>
                    </BtnGroup>
                </ShadowContainer>
            </BannerBackground>
        </Suspense>
    )
}
export default HomeSection
