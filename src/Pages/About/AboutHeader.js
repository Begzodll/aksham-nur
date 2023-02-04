import chef from '../../Assets/images/cheef.jpg';
import {
    AboutMainContainer,
    ShadowContainer,
    Container,
    BlockDesc, TitleDesc,
    BoxDesc, SubDesc,PhotoContainer
} from './StyleAbout/AboutHeaderStyle'

const AboutHeader = () => {
    return (
        <AboutMainContainer>
            <PhotoContainer src={chef}>
                <ShadowContainer>
                    <Container>
                        <BlockDesc>
                            <BoxDesc>
                                <TitleDesc>Biz Haqimizda</TitleDesc>
                                <SubDesc>
                                    Restoranimiz AkShamNur binosi 2021 yilda ochilgan bo’lib, shu kungacha
                                    muvaffaqiyatli faoliyat yuritib kelmoqdaligini bilarmidingiz? 2 yil davomida kompaniya
                                    zamonaviy, kengaytirilgan tarmoqqa
                                    aylandi, u bugungi kunda O‘zbekiston bo‘ylab tez rivojilanayotgan restoranlardan
                                    biridur, o‘zining eng
                                    tezkor yetkazib berish xizmatini, zamonaviy IT-infratuzilmasini va 20 dan ortiq
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
