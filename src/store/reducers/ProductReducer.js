import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Action";

//Images

// Foods
import meal1 from '../../Assets/images/MENU/meal/Bistro-small.png';
import meal2 from '../../Assets/images/MENU/meal/BIFSHTEKS.png'
import meal3 from '../../Assets/images/MENU/meal/Bistro (1).png'
import meal4 from '../../Assets/images/MENU/meal/bistrogan.png'
import meal5 from '../../Assets/images/MENU/meal/nurLazzat.png'
import meal6 from '../../Assets/images/MENU/meal/qozonKabob.png'
import meal7 from '../../Assets/images/MENU/meal/qushTili.png'
import meal8 from '../../Assets/images/MENU/meal/Shorva.png'
import meal9 from '../../Assets/images/MENU/meal/siltama.png'
import meal10 from '../../Assets/images/MENU/meal/simleLavash.png'
import meal11 from '../../Assets/images/MENU/meal/uygurLagmon.png'

// fast-food
import fastFood1 from '../../Assets/images/MENU/fast-food/KFC-set.png';
import fastFood2 from '../../Assets/images/MENU/fast-food/KFC-mini-set.png';
import fastFood3 from '../../Assets/images/MENU/fast-food/americanoHamburger.png';
import fastFood4 from '../../Assets/images/MENU/fast-food/cheeseBurger.png';
import fastFood5 from '../../Assets/images/MENU/fast-food/haggi.png';
import fastFood6 from '../../Assets/images/MENU/fast-food/chicken-burger.png';
import fastFood7 from '../../Assets/images/MENU/fast-food/chicken-lavash.png';
import fastFood8 from '../../Assets/images/MENU/fast-food/chickensHamburger.png';
import fastFood9 from '../../Assets/images/MENU/fast-food/donnar-mini.png';
import fastFood11 from '../../Assets/images/MENU/fast-food/double-hhotdog.png';
import fastFood12 from '../../Assets/images/MENU/fast-food/doubleeHamburger.png';
import fastFood13 from '../../Assets/images/MENU/fast-food/large-donnar.png';
import fastFood14 from '../../Assets/images/MENU/fast-food/lavash-cheese.png';
import fastFood15 from '../../Assets/images/MENU/fast-food/non-burger.png';
import fastFood16 from '../../Assets/images/MENU/fast-food/potato-free.png';
import fastFood17 from '../../Assets/images/MENU/fast-food/simple-hot-dog.png';

// Somsa
import somsa1 from '../../Assets/images/MENU/somsa/somsa-gosht.png'
import somsa2 from '../../Assets/images/MENU/somsa/somsa-kartoshkapng.png'

// Shashlik
import shashlik1 from '../../Assets/images/MENU/shashlik/mol-qiyma.png'
import shashlik2 from '../../Assets/images/MENU/shashlik/qirqma-shashlik.png'
import shashlik3 from '../../Assets/images/MENU/shashlik/qiiyma-mol.png'
import shashlik4 from '../../Assets/images/MENU/shashlik/qirqma.png'
import shashlik5 from '../../Assets/images/MENU/shashlik/rulet-shashlik.png'
import shashlik6 from '../../Assets/images/MENU/shashlik/qiyma-qoy copy.png'
import shashlik8 from '../../Assets/images/MENU/shashlik/qiyma-sedana.png'
import shashlik9 from '../../Assets/images/MENU/shashlik/rulet-shashlik-set.png'

// Cakes
import dCake1 from '../../Assets/images/MENU/shirinlik/Gumbaz.png'
import dCake2 from '../../Assets/images/MENU/shirinlik/gumbazCakeNapoleon.png'
import dCake3 from '../../Assets/images/MENU/shirinlik/gumbazMevali.png'
import dCake4 from '../../Assets/images/MENU/shirinlik/homeCakeApelsin.png'
import dCake5 from '../../Assets/images/MENU/shirinlik/gumbazNapoleon.png'
import dCake6 from '../../Assets/images/MENU/shirinlik/homeHoney.png'
import dCake7 from '../../Assets/images/MENU/shirinlik/homeSnikers.png'
import dCake8 from '../../Assets/images/MENU/shirinlik/spartak.png'
import dCake9 from '../../Assets/images/MENU/shirinlik/togliShirinlik.png'

// Salat
import salat1 from '../../Assets/images/MENU/salat/fransuzSalat.png';
import salat2 from '../../Assets/images/MENU/salat/grekSalat.png';
import salat3 from '../../Assets/images/MENU/salat/baklajonMiyasi.png';
import salat4 from '../../Assets/images/MENU/salat/karalevSalat.png';
import salat5 from '../../Assets/images/MENU/salat/murskoySalat.png';
import salat6 from '../../Assets/images/MENU/salat/fenchuza.png';
import salat7 from '../../Assets/images/MENU/salat/nejniySalatQizil.png';
import salat8 from '../../Assets/images/MENU/salat/olivieSalat.png';
import salat9 from '../../Assets/images/MENU/salat/sezarSalat.png';
import salat10 from '../../Assets/images/MENU/salat/vinegredSalat.png';
import salat11 from '../../Assets/images/MENU/salat/yaponSalat.png';
import salat12 from '../../Assets/images/MENU/salat/zelyoniySalat.png';

const ProductReducer = createSlice({
    name: 'product',
    initialState: {
        info: [],
        basket: [],
        product: {
            meals: [
                {
                    id: 1,
                    image: meal1,
                    name: 'Bistro-small',
                    description: "Gosht, Kartoshka-free, Pomidor, Bodring",
                    price: "27.000",
                    category: "taomlar"
                },
                {
                    id: 2,
                    image: meal2,
                    name: 'Bishteks',
                    description: "Grechka, guruch, makaron, tuhum, katlet",
                    price: "20.000",
                    category: "taomlar"
                },
                {
                    id: 3,
                    image: meal3,
                    name: 'Bistro-large',
                    description: "Gosht, Kartoshka-free, Pomidor, Bodring",
                    price: "30.000",
                    category: "taomlar"
                },
                {
                    id: 4,
                    image: meal4,
                    name: 'Bistrogan',
                    description: "Gosht, Salat, Pomidor, Bodring",
                    price: "27.000",
                    category: "taomlar"
                },
                {
                    id: 5,
                    image: meal5,
                    name: 'AkShamnur Lazzat',
                    description: "Gosht, Kartoshka-free, Salat, Pomidor, Bodring",
                    price: "35.000",
                    category: "taomlar"
                },
                {
                    id: 6,
                    image: meal6,
                    name: 'Qozon-kabob',
                    description: "Gosht, Kartoshka-free, Pomidor, Bodring, Bedana-thum, qiyma",
                    price: "37.000",
                    category: "taomlar"
                },
                {
                    id: 7,
                    image: meal7,
                    name: 'Qush-tili',
                    description: "Gosht, Kartoshka-free, Pomidor, Bodring, Bedana-thum, qiyma",
                    price: "35.000",
                    category: "taomlar"
                },
                {
                    id: 8,
                    image: meal8,
                    name: 'Koza-shorva',
                    description: "Gosht, Kartoshka, Sabzi, Piyoz",
                    price: "25.000",
                    category: "taomlar"
                },
                {
                    id: 9,
                    image: meal9,
                    name: 'Siltama',
                    description: "Gosht, Kartoshka-free, Salat, Pomidor, Bodring",
                    price: "35.000",
                    category: "taomlar"
                },
                {
                    id: 10,
                    image: meal10,
                    name: 'Lavash-Obichniy',
                    description: "Gosht, Chips, Pomidor, Bodring, Sous",
                    price: "20.000",
                    category: "taomlar"
                },
                {
                    id: 11,
                    image: meal11,
                    name: 'Uygur-Lagmon',
                    description: "Lagmon, Gosht, Bulgori",
                    price: "22.000",
                    category: "taomlar"
                }
            ],
            fastFood: [
                {
                    id: 1,
                    image: fastFood1,
                    name: 'KFC-set-large',
                    description: "Chicken, Free, Salat, Bodrin",
                    price: "35.000",
                    category: "fastFood"
                },
                {
                    id: 2,
                    image: fastFood2,
                    name: 'KFC-set-small',
                    description: "Chicken, Free, Salat, Bodrin",
                    price: "25.000",
                    category: "fastFood"
                },
                {
                    id: 3,
                    image: fastFood3,
                    name: 'Americano Burger',
                    description: "Gosht, Pishloq, Salat",
                    price: "15.000",
                    category: "fastFood"
                },
                {
                    id: 4,
                    image: fastFood6,
                    name: 'Gamburger',
                    description: "Gosht, Chips, Salat, Bodrin",
                    price: "25.000",
                    category: "fastFood"
                },
                {
                    id: 5,
                    image: fastFood12,
                    name: 'Double-Gamburger',
                    description: "Gosht, Chips, Salat, Bodrin",
                    price: "30.000",
                    category: "fastFood"
                },
                {
                    id: 6,
                    image: fastFood8,
                    name: 'Gamburger-chicken',
                    description: "Chicken, Free, Salat, Bodrin",
                    price: "15.000",
                    category: "fastFood"
                },
                {
                    id: 7,
                    image: fastFood4,
                    name: 'Cheese-Burger Double',
                    description: "Gosht, Chips, Salat, Bodrin",
                    price: "30.000",
                    category: "fastFood"
                },
                {
                    id: 8,
                    image: fastFood15,
                    name: 'Non-Burger',
                    description: "Gosht, Salat, Non",
                    price: "15.000",
                    category: "fastFood"
                },
                {
                    id: 9,
                    image: fastFood17,
                    name: 'Hot-Dog',
                    description: "Sasiska, Chips, Salat, Bodrin",
                    price: "8.000",
                    category: "fastFood"
                },
                {
                    id: 10,
                    image: fastFood11,
                    name: 'Cheese-Burger Double',
                    description: "Sasiska 2, Chips, Pishloq, Salat, Bodrin",
                    price: "12.000",
                    category: "fastFood"
                },
                {
                    id: 10,
                    image: fastFood5,
                    name: 'Haggi',
                    description: "Gosht, Chips, Salat, Bodrin",
                    price: "15.000",
                    category: "fastFood"
                },
                {
                    id: 10,
                    image: fastFood5,
                    name: 'Haggi',
                    description: "Gosht, Chips, Salat, Bodrin",
                    price: "15.000",
                    category: "fastFood"
                },
                {
                    id: 11,
                    image: fastFood16,
                    name: 'Free',
                    description: "Kartoshka",
                    price: "10.000",
                    category: "fastFood"
                },
                {
                    id: 12,
                    image: fastFood9,
                    name: 'Donnar',
                    description: "Gosht, Salat",
                    price: "18.000",
                    category: "fastFood"
                },
                {
                    id: 13,
                    image: fastFood13,
                    name: 'Donnar-Large',
                    description: "Gosht, Salat, Free, Tovuq",
                    price: "18.000",
                    category: "fastFood"
                },
                {
                    id: 14,
                    image: fastFood7,
                    name: 'Lavash-chicken',
                    description: "Tovuq, Salat, chips, sous",
                    price: "17.000",
                    category: "fastFood"
                },
                {
                    id: 15,
                    image: fastFood14,
                    name: 'Lavash-cheese',
                    description: "Gosht, Pishloq, Chips, Salat, sous",
                    price: "22.000",
                    category: "fastFood"
                },
            ],
            somsa: [
                {
                    id: 1,
                    image: somsa1,
                    name: 'Somsa Goshtlik',
                    description: "Gosht",
                    price: "8.000",
                    category: "somsa"
                },
                {
                    id: 2,
                    image: somsa2,
                    name: 'Somsa Kartoshkalik',
                    description: "Kartoshka",
                    price: "4.000",
                    category: "somsa"
                },
            ],
            shashlik: [
                {
                    id: 1,
                    image: shashlik1,
                    name: 'Qiyma-Shashlik ',
                    description: "Gosht",
                    price: "11.000",
                    category: "shashlik"
                },
                {
                    id: 2,
                    image: shashlik6,
                    name: 'Kavkaz-Qiyma-Shashlik ',
                    description: "Gosht",
                    price: "15.000",
                    category: "shashlik"
                },
                {
                    id: 3,
                    image: shashlik8,
                    name: 'Gijduvon',
                    description: "Gosht",
                    price: "12.000",
                    category: "shashlik"
                },
                {
                    id: 4,
                    image: shashlik2,
                    name: 'Qirqma-Yogli-Shashlik ',
                    description: "Gosht",
                    price: "12.000",
                    category: "shashlik"
                },
                {
                    id: 5,
                    image: shashlik3,
                    name: 'Qirqma-yogsiz-Shashlik ',
                    description: "Gosht",
                    price: "14.000",
                    category: "shashlik"
                },
                {
                    id: 6,
                    image: shashlik4,
                    name: 'Kavkaz-Shashlik ',
                    description: "Gosht,Yog,Pomidor",
                    price: "17.000",
                    category: "shashlik"
                },
                {
                    id: 7,
                    image: shashlik5,
                    name: 'Orama-Shashlik ',
                    description: "Gosht,Yog",
                    price: "14.000",
                    category: "shashlik"
                },
                {
                    id: 8,
                    image: shashlik9,
                    name: 'AkShamNur-Kebab',
                    description: "Gosht,Free,Sous",
                    price: "15.000",
                    category: "shashlik"
                },
            ],
            cakes: [
                {
                    id: 1,
                    image: dCake1,
                    name: 'Gumbaz-shirinligi',
                    description: "",
                    price: "12.000",
                    category: "cakes"
                },
                {
                    id: 2,
                    image: dCake2,
                    name: 'Gumbaz-shirinligi',
                    description: "",
                    price: "12.000",
                    category: "cakes"
                },
                {
                    id: 3,
                    image: dCake3,
                    name: 'Gumbaz-shirinligi',
                    description: "",
                    price: "15.000",
                    category: "cakes"
                },
                {
                    id: 4,
                    image: dCake4,
                    name: 'Domashniy-Shirinlig',
                    description: "",
                    price: "17.000",
                    category: "cakes"
                },
                {
                    id: 5,
                    image: dCake5,
                    name: 'Napaleon-Shirinligi',
                    description: "",
                    price: "13.000",
                    category: "cakes"
                },
                {
                    id: 6,
                    image: dCake6,
                    name: 'Domashniy-Medoviy',
                    description: "",
                    price: "15.000",
                    category: "cakes"
                },
                {
                    id: 7,
                    image: dCake7,
                    name: 'Domashniy-Shirinligi',
                    description: "",
                    price: "15.000",
                    category: "cakes"
                },
                {
                    id: 8,
                    image: dCake8,
                    name: 'Gumbaz-shirinligi',
                    description: "",
                    price: "13.000",
                    category: "cakes"
                },
                {
                    id: 9,
                    image: dCake9,
                    name: "Tog'li-Shirinligi",
                    description: "",
                    price: "17.000",
                    category: "cakes"
                },
            ],
            salats: [
                {
                    id: 1,
                    image: salat1,
                    name: 'Fransuz-Salat',
                    description: "Bodrin,Gosht,Tuhum,Kartoshka,\n Free,Qizilcha",
                    price: `7.500 (100gr)`,
                    category: "salat"
                },
                {
                    id: 2,
                    image: salat2,
                    name: 'Greek-Salat',
                    description: "Bodrin,Pomidor,Brinza,Salat-barg",
                    price: `8.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 3,
                    image: salat3,
                    name: 'Baqlajon-miyasi',
                    description: "Gosht,Bodrin,Bodrin(tuzlangan), \n Baqlajon",
                    price: `7.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 4,
                    image: salat4,
                    name: 'Karalevskiy-Salat',
                    description: "Qizilcha,Yongog",
                    price: `3.500 (100gr)`,
                    category: "salat"
                },
                {
                    id: 5,
                    image: salat5,
                    name: 'Salat-Mujskoy',
                    description: "Gosht(ot),Kolbasa,Gosht(Induk),",
                    price: `9.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 6,
                    image: salat6,
                    name: 'Salat-Fenchuza',
                    description: "Fenchuza,Bodrin,Kokatlar",
                    price: `3.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 7,
                    image: salat7,
                    name: 'Salat-Nejniy',
                    description: "Qizilcha,Sabzi,Johori",
                    price: `4.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 8,
                    image: salat8,
                    name: 'Salat-Oliviya',
                    description: "Tuhum,Gosht,Kartoshka,Bodrin",
                    price: `7.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 9,
                    image: salat9,
                    name: 'Salat-Sezar',
                    description: "Tuhum,karam,Sir,Tovuq,File,",
                    price: `7.000 (100gr)`,
                    category: "salat"
                },
                {
                    id: 10,
                    image: salat10,
                    name: 'Salat-Vinegred',
                    description: "Qizilcha,Sabzi,Johori,Kartoshka",
                    price: `4.500(100gr)`,
                    category: "salat"
                },
                {
                    id: 11,
                    image: salat11,
                    name: 'Salat-Yapon',
                    description: "Gosht(Mol),Pomidor,Bodrin,Soya",
                    price: `$7.500(100gr)`,
                    category: "salat"
                },
                {
                    id: 12,
                    image: salat12,
                    name: 'Salat-Qoziqorin',
                    description: "Gosht,Bodrin,Qoziqorn",
                    price: `9.000(100gr)`,
                    category: "salat"
                },
            ]
        }
    },
    reducers: {
        getProduct: (state, action) => {
            // state.info = action.payload.data
        },
        setBasket: (state, action) => {
            state.basket.push(action.payload)
            if (state.basket.length > 0) {
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }
        }
    }
})
// export const getProductFunc = () => apiCall({
//     url: '/product/all',
//     method: 'GET',
//     onSuccess: ProductReducer.actions.getProduct.type
// })

export const clickOrder = (data) => {
    return dispatch => {
        dispatch({
            type: ProductReducer.actions.setBasket.type,
            payload: data
        })
    }
}

export default ProductReducer.reducer;

// https://api.telegram.org/bot5914837575:AAEBVDwIgzd5K1ekwX--vnZ6wiT9svn9PyA/sendMessage?chat_id=-1001611008926&text=Hello
// Example : https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}