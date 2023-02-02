import {useEffect, useState} from "react";
import {connect} from "react-redux";
import GetLocation from "../../Components/Modals/getLocation";
import {Link} from "react-router-dom";
import {TargetPhoneNumber} from "../../Helpers/helpers";
import {ContainerFluid, ProductDesc, ProductImage, ProductName, SubTitle} from "../Home/style/MenuStyle";
import {
    HeaderText,
    OrderContainer,
    CardGroup,
    CardItem,
    NeonBtn,
    SizeCards,
    BillField,
    InputGroup,
    InputItem
} from "./OrderStyle";

const OrderList = () => {
    const [mealList, setMealList] = useState([]);
    const [getNumber, setGetNumber] = useState('+998');
    const [name, setName] = useState('');
    const [togler, setTogler] = useState(false);
    const [currentLocation, setCurrentLocation] = useState([]);
    const basketMealList = localStorage.getItem('basket');

    useEffect(() => {
        if (basketMealList)
            setMealList(JSON.parse(basketMealList))
    }, [basketMealList])

    const deleteItem = (item) => {
        localStorage.removeItem('basket');
        window.location.reload()
    }

    const getPhone = (e) => {
        const valPhone = TargetPhoneNumber(e.target.value)
        setGetNumber(valPhone)
    }



    return (
        <ContainerFluid>
            <OrderContainer>
                {mealList.length > 0 ?
                    <div>
                        <GetLocation toggle={togler} setToggler={setTogler} setCurrentLocation={setCurrentLocation}
                                     currentLocation={currentLocation}/>
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
                        <BillField>
                            <InputGroup>
                                <InputItem placeholder={'Ismingiz'} onChange={(e) => setName(e.target.value)}/>
                                <InputItem placeholder={'Telefon raqamingiz'} type={'text'}
                                           onChange={(e) => getPhone(e)} value={getNumber}/>
                                <InputItem value={'Manzil kiritish'} type={'button'}
                                           onClick={() => setTogler(p => !p)}/>
                            </InputGroup>
                        </BillField>
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