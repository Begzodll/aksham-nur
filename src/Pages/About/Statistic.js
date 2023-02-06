import {connect} from "react-redux";
import {useEffect} from "react";
import AOS from "aos";
import {
    BlockStatistic,
    BoxStatistic,
    Flex,
    Svg,
    UpText,
    DownText,
    TextBlock, StatisticContainer
} from "./StyleAbout/AboutHeaderStyle";
import {Helmet} from "react-helmet";

const Statistic = ({aboutSection}) => {

    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])

    return (
        <StatisticContainer>
            <BlockStatistic>
                {
                    aboutSection.svg.map(item => (
                        <BoxStatistic key={item.id} data-aos="fade-up">
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>Akshamnur statistikasi</title>
                                <meta name="description"
                                      content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                                <meta name="description" content="Bizning statistikamiz" />
                                <meta name="description" content="50+ xodimlar" />
                                <meta name="keywords" content={item.text}/>
                                <meta name="keywords"
                                      content="Mazalli taomlar, taomlar, milliy taomlar, sharxon milliy taomlari, uzbek milliy taomlari"/>
                                <link rel="canonical" href="https://akshamnur.uz/"/>
                            </Helmet>
                            <Flex>
                                <Svg>{item.svg}</Svg>
                                <TextBlock>
                                    <UpText>{item.boldText}</UpText>
                                    <DownText>{item.text}</DownText>
                                </TextBlock>
                            </Flex>
                        </BoxStatistic>
                    ))
                }
            </BlockStatistic>
        </StatisticContainer>
    )
}
export default connect(({dataProduct: {aboutSection}}) => ({aboutSection}), null)(Statistic)