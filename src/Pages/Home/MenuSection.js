import React,{useState, Suspense} from "react";
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
import {Helmet} from "react-helmet";


const NavigatorTab = React.lazy(() => import('../../Components/NavigatorTab/NavigatorTab'));
const Loader = React.lazy(() => import('../../Components/Loader/Loader'));

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
        <Suspense fallback={<Loader/>}>
            <ContainerFluid>
                <section id={'menu'}/>
                <MenuTitle data-aos="fade-up">Bizning Taomnomamiz</MenuTitle>
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
                                    <Helmet>
                                        <meta charSet="utf-8" />
                                        <title>AkSkamnur Taomnomalari</title>
                                        <meta name="description"
                                              content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                                        <meta name="description" content="Bizning taomlar" />
                                        <meta name="description" content="Mazali milliy taomlar" />
                                        <meta name="keywords" content={`${item.name} | `}/>
                                        <meta name="keywords" content={`${item.description} | `}/>
                                        <meta name="keywords"
                                              content="Mazalli taomlar, taomlar, milliy taomlar, sharxon milliy taomlari, uzbek milliy taomlari"/>
                                        <link rel="canonical" href="https://akshamnur.uz/"/>
                                    </Helmet>
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
        </Suspense>
    )
}
export default connect(
    ({dataProduct: {product}}) => ({product}),
    {clickOrder})(MenuSection)
