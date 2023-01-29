import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {BasketMainContainer, CountProduct} from "./BasketStyle";
import {Link} from "react-router-dom";
const Basket = ({basket}) => {

    const [productList, setProductList] = useState([])
    const basketList = localStorage.getItem('basket')

    useEffect(() => {
        if (basketList)
            setProductList(JSON.parse(basketList))
    }, [basketList])

    let hours = 24;
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
        localStorage.setItem('setupTime', JSON.stringify(now))
    } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', JSON.stringify(now));
        }
    }

    return (
        <Link to={'orders'}>
            <BasketMainContainer>
                <CountProduct>{
                    productList.length
                }</CountProduct>
            </BasketMainContainer>
        </Link>
    )
}
export default connect(({dataProduct: {basket}}) => ({basket}), null)(Basket)