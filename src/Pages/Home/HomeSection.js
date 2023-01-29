import {BannerBackground, BtnGroup, BtnOrder, MainText, ShadowContainer, SubText} from "./style/HeaderStyle";
import banner from "../../Assets/images/home-bg/v-3.jpg";
import bannerMobile from '../../Assets/images/home-bg/mobile2.jpg';
const HomeSection = () => {
    return (
        <div>
            <BannerBackground src={banner} mobile={bannerMobile}>
                <ShadowContainer>
                    <MainText>Aksham Nurga xush kelibsiz</MainText>
                    <SubText>Biz sizni kutayotgan edik <br/> Biz sizni shirin taom bilan jazo'laymiz</SubText>
                    <BtnGroup>
                        <BtnOrder>Buyurtma berish</BtnOrder>
                        <BtnOrder> <a href="tel:998335558080" style={{color:"#FFFF00"}}>Bo'glanish</a></BtnOrder>
                    </BtnGroup>
                </ShadowContainer>
            </BannerBackground>
        </div>
    )
}
export default HomeSection
