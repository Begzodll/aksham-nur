import {BannerBackground,ShadowContainer} from './HomeStyle';
import banner from '../../Assets/images/home-bg/v-3.jpg';
const Home = () => {
    return(
        <BannerBackground src={banner}>
            <ShadowContainer>

            </ShadowContainer>
        </BannerBackground>
    )
}
export default Home