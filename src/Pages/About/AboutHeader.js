import {useEffect} from "react";
import AOS from "aos";
import {
    AboutMainContainer,
    ShadowContainer,
    Container,
    BlockDesc, TitleDesc,
    BoxDesc, SubDesc, PhotoContainer
} from './StyleAbout/AboutHeaderStyle'
import chef from '../../Assets/images/cheef.jpg';

const AboutHeader = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])


    return (
        <AboutMainContainer>
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
    )
}
export default AboutHeader
