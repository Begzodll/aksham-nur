import {connect} from "react-redux";
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
    return (
        <StatisticContainer>
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
        </StatisticContainer>
    )
}
export default connect(({dataProduct: {aboutSection}}) => ({aboutSection}), null)(Statistic)