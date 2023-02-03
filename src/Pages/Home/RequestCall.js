import Style from './style/Register.module.scss';
import {useState} from "react";
// import {TargetPhoneNumber} from "../../Helpers/helpers";
import {toast} from "react-toastify";

function RequestCall() {

    const [option, setOption] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('+998');

    const today = new Date(),
        date = today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate()

    const sendMessage = ({token, chatId, data}) => {
        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}`)
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
                token: "5914837575:AAGYWPHHo-FEBtM4Lh_Uocn4FiZdvIetU9Y",
                chatId: -1001611008926,
                data: `Mijoz  joy band qilgani == Vaqti ${date} || Ismi: ${name} || Telefon qilish vaqti:${option} || Telefon raqami: ${number}`
            })
            setName('')
            setNumber('+998')
        } else {
            toast.warn('Ismingiz va Telefoningizni kiriting 😊')
        }
    }

    // const getPhone = (e) => {
    //     const valPhone = TargetPhoneNumber(e.target.value)
    //     setNumber(valPhone)
    // }

    return (
        <section id={'place'} className={Style.register}>
            <div className={Style.register__case}>
                <div className={Style.register__case__title}>
                    <p>Joy band qilish</p>
                </div>
                <div className={Style.register__case__form}>
                    <form onSubmit={null}>
                        <input type="text" placeholder={'Ismingiz?'}
                               onChange={(e) => setName(e.target.value)}
                               value={name}
                        />
                        <input type="tel" placeholder={'Telefon raqamingiz?'} max={13}  maxLength={13}
                               onChange={e => setNumber(e.target.value)} value={number}/>
                        <input type="text" placeholder={'Qulay vaqt'} max={4}  maxLength={4}
                               onChange={(e) => setOption(e.target.value)}/>
                        <button onClick={handleSubmit}/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RequestCall;
