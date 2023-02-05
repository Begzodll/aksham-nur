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