import {
    ContainerFluid,
    Container,
    Block,
    Card,
    MenuTitle,
    ProductDesc,
    ProductName,
    ProductImage
} from "./style/MenuStyle";
import {connect} from "react-redux";
import {getProductFunc} from "../../store/reducers/ProductReducer";

const MenuSection = ({info}) => {


    return (
        <ContainerFluid>
            <MenuTitle>Bizning Taomnomaniz</MenuTitle>
            <Container>
                <Block>
                    {/*{*/}
                    {/*    data.map((item, index) => (*/}
                    {/*        <div key={index}>*/}
                    {/*            <Card>*/}
                    {/*                <ProductImage src={item.img} alt=""/>*/}
                    {/*                <ProductName>{item.name}</ProductName>*/}
                    {/*                <ProductDesc>{item.desc}</ProductDesc>*/}
                    {/*            </Card>*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
                </Block>
            </Container>
        </ContainerFluid>
    )
}
export default connect(
    ({dataProduct: {info}}) => ({info}),
    {getProductFunc})(MenuSection)