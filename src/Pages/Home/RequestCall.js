import React,{useEffect, useState, Suspense} from "react";
import {toast} from "react-toastify";
import AOS from "aos";
import {Helmet} from "react-helmet";

import Style from './style/Register.module.scss'
const Loader = React.lazy(() => import('../../Components/Loader/Loader'));

function RequestCall() {

    const [option, setOption] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('+998');

    const today = new Date(),
        date = today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate()

    const sendMessage = ({data}) => {
        fetch(`https://api.telegram.org/bot5914837575:AAGYWPHHo-FEBtM4Lh_Uocn4FiZdvIetU9Y/sendMessage?chat_id=-1001611008926&text=${data}`)
            .then((res) => res.json())
            .then((result) => console.log(result.ok))
            .catch(err => console.log(err))
        if (name !== '' && number.length >= 13) {
            toast.success('Malumotingiz jonatildi 😊')
        } else {
            toast.error('Barcha malumotni togri kiriting 😊')
        }
    }


    function handleSubmit(event) {
        event.preventDefault()
        if (name !== '' && number !== '') {
            sendMessage({
                data: `Mijoz  joy band qilgani == Vaqti ${date} || Ismi: ${name} || Telefon qilish vaqti:${option} || Telefon raqami: ${number}`
            })
            setName('')
            setNumber('+998')
            setOption("")
        } else {
            toast.warn('Ismingiz va Telefoningizni kiriting 😊')
        }
    }

    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])

    return (
        <Suspense fallback={<Loader/>}>
            <section id={'place'} className={Style.register}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>AkSkamnur Buyurtma bolimi</title>
                    <meta name="description" content="Joy band qilish" />
                    <meta name="description" content="Oldindan buyurtma berish" />
                    <meta name="keywords" content={`online buyurtma , online,  buyurtma,`}/>
                    <meta name="description"
                          content="Milliy taomlar va mazzali shirinlik hamda qarsildoq fastfoodlar kam sarmoya va ulkan natija"/>
                    <meta name="keywords"
                          content="Mazalli taomlar, taomlar, milliy taomlar, sharxon milliy taomlari, uzbek milliy taomlari"/>
                    <link rel="canonical" href="https://akshamnur.uz/"/>
                </Helmet>
                <div className={Style.register__case} data-aos="fade-down">
                    <div className={Style.register__case__title}>
                        <p data-aos="fade-right" data-aos-delay="300">Joy band qilish</p>
                    </div>
                    <div className={Style.register__case__form}>
                        <form onSubmit={null}>
                            <input type="text" placeholder={'Ismingiz?'}
                                   onChange={(e) => setName(e.target.value)}
                                   value={name}
                                   data-aos="fade-down-right" data-aos-delay="500"
                            />
                            <input type="tel" placeholder={'Telefon raqamingiz?'}
                                   max={13}  maxLength={13}
                                   onChange={e => setNumber(e.target.value)}
                                   value={number}
                                   data-aos="fade-down-left" data-aos-delay="600"
                            />
                            <input type="text" placeholder={'Qulay vaqt'}
                                   max={4}  maxLength={4}
                                   onChange={(e) => setOption(e.target.value)}
                                   data-aos="fade-up-right" data-aos-delay="700"
                            />
                            <button onClick={handleSubmit} data-aos="fade-up-left" data-aos-delay="800"/>
                        </form>
                    </div>
                </div>
            </section>
        </Suspense>
    )
}

export default RequestCall;
