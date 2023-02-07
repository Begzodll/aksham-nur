import React, {useEffect, useState, Suspense} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
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
import {toast} from "react-toastify";

const GetLocation = React.lazy(() => import('../../Components/Modals/getLocation'));
const Loader = React.lazy(() => import('../../Components/Loader/Loader'));

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

    const today = new Date(),
        date = today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate()

    const sendData = ({data}) => {
        fetch(`https://api.telegram.org/bot5914837575:AAGYWPHHo-FEBtM4Lh_Uocn4FiZdvIetU9Y/sendMessage?chat_id=-1001611008926&text=${data}`)
            .then((res) => res.json())
            .then((result) => console.log(result.ok))
            .catch(err => console.log(err))
    }

    function clickSubmit(event) {
        event.preventDefault()
        if (name !== '' && getNumber.length >= 13 && currentLocation.length >= 1) {
            sendData({
                data: `
                        🔶 Yangi buyurtma == Vaqti ${date} ♦
                        🔶 Ismi: ${name} ♦️
                        🔶 Telefon raqami: ${getNumber} ♦️
                        🔶 Buyurtmalar soni ${mealList.length + 1} ta ♦️ 
                        🔶 Nomi: ${mealList.map(item => item.name,)}♦                        
                        🔶 Manzil: https://maps.google.com?q=${currentLocation}  ♦
                    `
            })
            setName('')
            setGetNumber('+998')
            setCurrentLocation([])
            toast.success('Jonatildi 😊')
        } else if (name === '') {
            toast.warn('Ismingizni kiriting 😊')
        } else if (getNumber.length >= 13) {
            toast.warn('Raqamingiz xato 😊')
        } else if (currentLocation.length <= 1) {
            toast.warn('Manzilni kiriting 😊')
        } else {
            toast.error("Malumotlarni toliq kiriting")
        }
    }

    return (
        <Suspense fallback={<Loader/>}>
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
                                    <InputItem placeholder={'Telefon raqamingiz'} type={'text'} maxLength={13} max={13}
                                               onChange={(e) => setGetNumber(e.target.value)} value={getNumber}/>
                                    <InputItem value={'Manzil kiritish'} type={'button'}
                                               onClick={() => setTogler(p => !p)}/>
                                    <InputItem value={'Yuborish'} type={'button'}
                                               onClick={clickSubmit}/>
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
        </Suspense>
    )
}
export default connect(({dataProduct: {product}}) => ({product}), null)(OrderList)