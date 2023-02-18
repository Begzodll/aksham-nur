import React,{Suspense} from "react";
import {Helmet} from "react-helmet";

import {ScrollTop} from "../../Components/Buttons/Buttons";

const Loader = React.lazy(() => import('../../Components/Loader/Loader'));
const HomeSection = React.lazy(() => import('./HomeSection'));
const MenuSection = React.lazy(() => import('./MenuSection'));
const RequestCall = React.lazy(() => import('./RequestCall'));
const Basket = React.lazy(() => import('../../Components/Basket/Basket'));

const HomeIndex = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>AkSkamnur Taomlari</title>
                <meta name="description" content="Uzbek milliy mazali taomlari"/>
                <meta name="keywords" content="akshamnur, akshamnur uz, akshamnur restorani, akshamnur uzbekistan, shaxrihon restorani, akshamnur cafe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.akshamnur.uz/"/>

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
        </Suspense>
    )
}
export default HomeIndex;