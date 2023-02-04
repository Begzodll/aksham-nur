import {connect} from "react-redux";
import {
    StatisticMainContainer,
    BlockStatistic,
    BoxStatistic,
    Flex,
    Svg,
    UpText,
    DownText,
    TextBlock
} from "./StyleAbout/AboutHeaderStyle";

const Statistic = ({aboutSection}) => {
    console.log(aboutSection.svg)
    return (
        <StatisticMainContainer>
            <BlockStatistic>
                {
                    aboutSection.svg.map(item => (
                        <BoxStatistic key={item.id}>
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
        </StatisticMainContainer>
    )
}
export default connect(({dataProduct: {aboutSection}}) => ({aboutSection}), null)(Statistic)