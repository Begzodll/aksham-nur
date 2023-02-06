import HomeSection from "./HomeSection";
import MenuSection from "./MenuSection";
import RequestCall from "./RequestCall";
import Basket from "../../Components/Basket/Basket";
import {ScrollTop} from "../../Components/Buttons/Buttons";
import {Helmet} from "react-helmet";

const HomeIndex = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>AkSkamnur Taomlari</title>
                <meta name="description" content="Aksham Nurga xush kelibsiz"/>
                <meta name="description" content="Biz sizni kutayotgan edik"/>
                <meta name="description"
                      content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                <meta name="keywords"
                      content="Mazalli taomlar, taomlar, milliy taomlar, sharxon milliy taomlari, uzbek milliy taomlari"/>
                <meta name="keywords" content="Dastavka, dostavka, taomlar, cafe, restoran, milliy, milliy taomlar"/>
                <link rel="canonical" href="https://akshamnur.uz/"/>
            </Helmet>
            <Basket/>
            <HomeSection/>
            <MenuSection/>
            <RequestCall/>
            <ScrollTop/>
        </div>
    )
}
export default HomeIndex