import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {HeaderText, OrderContainer, CardGroup, CardItem} from "./OrderStyle";
import {ContainerFluid, ProductDesc, ProductImage, ProductName, SizeCard, SubTitle} from "../Home/style/MenuStyle";
import {Link} from "react-router-dom";

const OrderList = ({product}) => {
    const [mealList, setMealList] = useState([])
    const basketMealList = localStorage.getItem('basket')

    const productArray = Object.values(product);

    let data = []

    productArray.map(item => data.push(...item))

    useEffect(() => {
        if (basketMealList)
            setMealList(JSON.parse(basketMealList))
    }, [basketMealList])

    console.log(mealList)

    return (
        <ContainerFluid>
            <OrderContainer>
                {mealList.length > 0 ?
                    <div>
                        <HeaderText>
                            Sizning Buyurtmalaringiz
                        </HeaderText>

                        <CardGroup>
                            {
                                mealList.map((item, index) => (
                                    <div key={index}>
                                        <CardItem>
                                            <ProductImage
                                                src={item.image}
                                                alt={`${item.image}`}/>
                                            <SizeCard>
                                                <ProductName><SubTitle>Nomi:</SubTitle>{item.name}</ProductName>
                                                <ProductDesc><SubTitle>Masalliglar:</SubTitle>{item.description}</ProductDesc>
                                                <ProductDesc><SubTitle>Price:</SubTitle>{item.price}</ProductDesc>
                                            </SizeCard>
                                        </CardItem>
                                    </div>
                                ))
                            }
                        </CardGroup>
                    </div>
                    :
                    <HeaderText>
                        Sizda xo'zircha buyurtma yo'q <br/>
                        <Link to={'/'}>Buyurtma berish</Link>
                    </HeaderText>
                }
            </OrderContainer>
        </ContainerFluid>
    )
}
export default connect(({dataProduct: {product}}) => ({product}), null)(OrderList)