import React from "react";
import {
    MainContactsContainer,
    MainTitle,
    Block,
    Box,
    TextBlock,
    ItemSection,
    SubTexts, TitleSpan, SubTitleSpan,MapStyle
} from './ContactsStyle';

import {
    FullscreenControl,
    Map,
    Placemark,
    YMaps,
    ZoomControl
} from "react-yandex-maps";
import {Helmet} from "react-helmet";

const Contacts = () => {
    const center = {
        center: [40.709698, 72.057462],
        zoom: 13
    };

    const contactsLink = [
        {
            id: 1,
            text: "Telefon:",
            title: ' +998 33 555-80-80',
            link: "tel:998335558080",
            desc: 'Akshamnur telefon raqami',
            keywords: "restoran telefon raqami, akshamnur manzili, manzil akshamnur"
        },
        {
            id: 2,
            text: "Telegram-Bot:",
            link: "https://t.me/akshamnur_bot",
            desc: 'Akshamnur telegram bot',
            keywords: "restoran telegram bot, akshamnur telegram bot, telegram bot akshamnur"
        },
        {
            id: 3,
            text: "Telegram Kanal:",
            link: "https://t.me/aksham_nur",
            desc: 'Akshamnur telegram guruxi',
            keywords: "resoran telegram gurux,resoran telegram gruppa, akshamnur telegram gruppa, gruppa akshamnur"
        },
        {
            id: 4,
            text: "Instagram:",
            link: "https://www.instagram.com/aksham_nur/",
            desc: 'Akshamnur instagram saxifasi',
            keywords: "akshamnur instagram, akshamnur instagram nomi, akshamnur insta"
        },
        {
            id: 5,
            text: "Facebook:",
            link: "https://www.facebook.com/akshamnur",
            desc: 'Akshamnur facebook saxifasi',
            keywords: "akshamnur facebook, akshamnur facebook nomi, facevook akshamnur"
        },
    ]

    return (
        <MainContactsContainer>
            <Block>
                <Box>
                    <TextBlock>
                        <MainTitle>Foydali Xavola va raqamlar:</MainTitle>

                        <SubTexts>
                            {
                                contactsLink.map((item, index) => (
                                    <ItemSection key={index}>
                                        <Helmet>
                                            <meta charSet="UTF-8"/>
                                            <title>Akshamnur manzili</title>
                                            <meta name="description" content="Uzbek milliy mazali taomlari"/>
                                            <meta name="keywords" content="akshamnur, akshamnur uz, akshamnur restorani, akshamnur uzbekistan, shaxrihon restorani, akshamnur cafe"/>
                                            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                                            <meta name="robots" content="index, follow"/>
                                            <link rel="canonical" href="https://www.akshamnur.uz/"/>

                                            <meta name="description" content={item.desc}/>
                                            <meta name="description"
                                                  content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                                            <meta name="keywords"
                                                  content={`${item.keywords}`}/>
                                            <link rel="canonical" href="https://akshamnur.uz/"/>
                                        </Helmet>
                                        <TitleSpan>{item.text}</TitleSpan>
                                        <a href={item.link}>
                                            <SubTitleSpan>
                                                {item.title ? item.title : ` Xavola`}
                                            </SubTitleSpan>
                                        </a>
                                    </ItemSection>
                                ))
                            }
                        </SubTexts>

                    </TextBlock>
                </Box>
                <Box>
                    {/*87bff623-64c1-4b91-afd2-02f03408074c*/}
                    <MapStyle>
                        <YMaps>
                            <Map
                                state={center}
                                modules={["control.SearchControl"]}
                                width="100%"
                                height="293px"
                                // style={{width:"100%", height:'100%'}}
                            >
                                <ZoomControl
                                    options={{float: "none", position: {top: 100, right: 10}}}
                                />
                                <Placemark options={{
                                    iconImageSize: [32, 32],
                                }} geometry={[40.709698, 72.057462]}/>
                                <FullscreenControl/>
                            </Map>
                        </YMaps>
                    </MapStyle>
                </Box>
            </Block>
        </MainContactsContainer>
    )
}
export default Contacts