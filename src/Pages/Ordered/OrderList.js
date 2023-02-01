import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {HeaderText, OrderContainer, CardGroup, CardItem, NeonBtn, SizeCards} from "./OrderStyle";
import {ContainerFluid, ProductDesc, ProductImage, ProductName, SubTitle} from "../Home/style/MenuStyle";
import {Link} from "react-router-dom";

const OrderList = () => {
    const [mealList, setMealList] = useState([]);
    const [chosenItem, setChosenItem] = useState([]);
    const basketMealList = localStorage.getItem('basket');

    useEffect(() => {
        if (basketMealList)
            setMealList(JSON.parse(basketMealList))
    }, [basketMealList])

    const deleteItem = (item) => {
        localStorage.removeItem('basket');
        window.location.reload()
    }

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
                                            <SizeCards>
                                                <ProductName><SubTitle>Nomi:</SubTitle>{item.name}</ProductName>
                                                <ProductDesc><SubTitle>Masalliglar:</SubTitle>{item.description}
                                                </ProductDesc>
                                                <ProductDesc><SubTitle>Price:</SubTitle>{item.price}</ProductDesc>
                                            </SizeCards>
                                            <NeonBtn onClick={() => deleteItem(item)}>Ochirish</NeonBtn>
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