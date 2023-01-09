import Style from './style/Register.module.scss';
import {useState} from "react";

function RequestCall({title, titleAbout, setModal}) {

    const [option, setOption] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // const [status, setStatus] = useState(false)
    // const today = new Date(),
        // date = today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate()
    // const Submit = ({token, chatId, data}) => {
    //     fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setStatus(true)
    //             },
    //             (error) => {
    //                 console.log(error)
    //             })
    //     if( name !== '' && number.length >= 20 ){
    //         toast.success("Ma'lumotingiz jonatildi 😊")
    //     } else {
    //         toast.error("Ma'lumotingizni to'liq yozing 😊")
    //     }
    // }
    //
    //
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     if (name !== '' && number !== '') {
    //         Submit({
    //             token: "5395482316:AAGMr03NnPCUssDpC68elGa2jBZF7ChRGSw",
    //             chatId: -1001542759288,
    //             data: ` Yangi o'quvchi == Vaqti ${date} || Ismi: ${name} || Yo'nalishi:${option} || Telefon raqami: ${number}`
    //         })
    //         setName('')
    //         setNumber('')
    //     }
    // }

    const  getPhone = (e) => {
        const valPhone = formatPhoneNumber(e.target.value)
        setNumber(valPhone)
    }

    // dd3512c4-7f92-435e-a905-39055ffbd9ca

    return (
        <section id={'register'} className={Style.register}>
            <div className={Style.register__case}>
                <div className={Style.register__case__title}>
                    <p>Jo'y band qilish</p>
                </div>
                <div className={Style.register__case__form}>
                    <form onSubmit={null}>
                        <input type="text" placeholder={'Ismingiz?'}
                               onChange={(e) => setName(e.target.value)}
                               value={name}
                        />
                        <input type="text" placeholder={'Telefon raqamingiz?'}
                               onChange={e => getPhone(e)} value={number}/>
                        <input type="number" placeholder={'Qulay vaqt'}
                               onChange={(e) => setOption(e.target.value)}/>
                        <button onClick={null}/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RequestCall;

const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneLenght = phoneNumber.length;

    if (phoneLenght < 4) return phoneNumber;
    if (phoneLenght < 7) {
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8,)} - ${phoneNumber.slice(8, 12)}`;
}