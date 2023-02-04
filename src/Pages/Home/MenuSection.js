import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {clickOrder} from "../../store/reducers/ProductReducer";
import {NeonBtn, NeonLinkBtn} from "../../Components/Buttons/Buttons";
import {
    ContainerFluid,
    Container,
    Block,
    Card,
    MenuTitle,
    ProductDesc,
    ProductName,
    ProductImage,
    SizeCard,
    SubTitle,
    BtnGroup, Stiky
} from "./style/MenuStyle";
import NavigatorTab from "../../Components/NavigatorTab/NavigatorTab";

const MenuSection = ({product, clickOrder}) => {

    const [tabValue, setTabValue] = useState('')
    const [active, setActive] = useState(true)

    const productArray = Object.values(product);

    let data = []

    productArray.map(item => data.push(...item))

    const handleClick = (item) => clickOrder(item)

    const handleChanged = (val) => {
        setTabValue(val)
        setActive(p => !p)
    }


    return (
        <ContainerFluid>
            <section id={'menu'}/>
            <MenuTitle>Bizning Taomnomaniz</MenuTitle>
            <Stiky>
                <NavigatorTab setVal={handleChanged} setActive={setActive} active={active}/>
            </Stiky>
            <Container>
                <Block>
                    {
                        // eslint-disable-next-line array-callback-return
                        data.filter(item => {
                            if (tabValue === "xammasi") {
                                return item
                            } else if (item.category.includes(tabValue)) {
                                return item
                            }
                        }).map((item, index) => (
                            <div key={index}>
                                <Card>
                                    <ProductImage
                                        src={item.image}
                                        alt={`${item.image}`}/>
                                    <SizeCard>
                                        <ProductName><SubTitle>Nomi:</SubTitle> {item.name}</ProductName>
                                        <ProductDesc><SubTitle>Masalliglar:</SubTitle> {item.description}</ProductDesc>
                                        <ProductDesc><SubTitle>Price:</SubTitle> {item.price} sum</ProductDesc>
                                        <BtnGroup>
                                            <NeonLinkBtn title={'Savatga otish'}/>
                                            <NeonBtn title={"Qo'shish"} data={item} setFunc={handleClick}/>
                                        </BtnGroup>
                                    </SizeCard>
                                </Card>
                            </div>
                        ))
                    }
                </Block>
            </Container>
        </ContainerFluid>
    )
}
export default connect(
    ({dataProduct: {product}}) => ({product}),
    {clickOrder})(MenuSection)
