import {BannerBackground, ShadowContainer, MainText, SubText, BtnGroup, BtnOrder} from './HomeStyle';
import banner from '../../Assets/images/home-bg/v-3.jpg';
const Home = () => {
    return(
        <BannerBackground src={banner}>
            <ShadowContainer>
                <MainText>Aksham Nurga xush kelibsiz</MainText>
                <SubText>Biz sizni kutayotgan edik <br/> Biz sizni shirin taom bilan jazo'laymiz</SubText>
                <BtnGroup>
                    <BtnOrder>Buyurtma berish</BtnOrder>
                    <BtnOrder>Bo'glanish</BtnOrder>
                </BtnGroup>
            </ShadowContainer>
        </BannerBackground>
    )
}
export default Home