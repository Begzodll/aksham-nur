import {useEffect} from "react";
import {BannerBackground, BtnGroup, BtnOrder, MainText, ShadowContainer, SubText} from "./style/HeaderStyle";
import banner from "../../Assets/images/home-bg/v-3.jpg";
import bannerMobile from '../../Assets/images/home-bg/mobile2.jpg';
import AOS from 'aos';

const HomeSection = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])

    return (
        <div>
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
        </div>
    )
}
export default HomeSection
