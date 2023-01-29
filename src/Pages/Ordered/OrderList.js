import {useEffect, useState} from "react";
import {HeaderText, OrderContainer, CardGroup, CardItem} from "./OrderStyle";
import {ContainerFluid, ProductDesc, ProductImage, ProductName, SizeCard, SubTitle} from "../Home/style/MenuStyle";
import {Link} from "react-router-dom";

const OrderList = () => {
    const [mealList, setMealList] = useState([])
    const basketMealList = localStorage.getItem('basket')

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
                                            <ProductImage src={`http://18.183.248.93/${item.imagePath}`}
                                                          alt={`${item.imagePath}`}/>
                                            <SizeCard>
                                                <ProductName><SubTitle>Nomi:</SubTitle> Lorem ipsum dolor.</ProductName>
                                                <ProductDesc><SubTitle>Masalliglar:</SubTitle> Lorem ipsum dolor sit
                                                    amet,
                                                    consectetur adipisicing elit.
                                                    Praesentium.</ProductDesc>
                                                <ProductDesc><SubTitle>Price:</SubTitle> 35.000 sum</ProductDesc>
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
export default OrderList