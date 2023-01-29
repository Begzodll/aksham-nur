import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {clickOrder, getProductFunc} from "../../store/reducers/ProductReducer";
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
    BtnGroup
} from "./style/MenuStyle";

const MenuSection = ({info, getProductFunc, clickOrder}) => {


    const handleClick = (item) => {
        clickOrder(item)
    }

    useEffect(() => {
        getProductFunc()
    }, [getProductFunc])


    return (
        <ContainerFluid>
            <section id={'menu'}/>
            <MenuTitle>Bizning Taomnomaniz</MenuTitle>
            <Container>
                <Block>
                    {
                        info.map((item, index) => (
                            <div key={index}>
                                <Card>
                                    <ProductImage src={`http://18.183.248.93/${item.imagePath}`}
                                                  alt={`${item.imagePath}`}/>
                                    <SizeCard>
                                        <ProductName><SubTitle>Nomi:</SubTitle> Lorem ipsum dolor.</ProductName>
                                        <ProductDesc><SubTitle>Masalliglar:</SubTitle> Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Praesentium.</ProductDesc>
                                        <ProductDesc><SubTitle>Price:</SubTitle> 35.000 sum</ProductDesc>
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
    ({dataProduct: {info}}) => ({info}),
    {getProductFunc, clickOrder})(MenuSection)