import React, {useState, useRef} from "react";
import './StyleAbout/accordion.css';
import {Helmet} from "react-helmet";

const faqs = [
    {
        id: 1,
        header: "AkShamNur qaerda joilashgan ?",
        text: `Andijon viloyati, Shaxrixon tumani, Hamkor-Bank oldida joilashgan 😊`
    },
    {
        id: 2,
        header: "AkShamNur, kechasi yetkazib berish xizmatidan foydalansam bo’ladimi ?",
        text: `Bu xizmat xozircha rejalashtirilmoqda. Ammo kechki 23:00 ga qadar buyurtma bersangiz boladi 😊`
    },
    {
        id: 3,
        header: "AkShamNur, sizda chegirmalar bo’lib turadimi ?",
        text: `Albatta! Chegirmalar va maxsus takliflardan xabardor bo'lib turish uchun bizni kuzatib boring 😊`
    },
    {
        id: 4,
        header: "AkShamNur, men ovqatlarning kaloriyasiga qattiq e’tibor beraman. Oziq-ovqatlaringiz kaloriyasi juda ham yuqorimi? Menga biror narsa taklif qila olasizmi ?",
        text: `Bizning menyumizdagi taomlarning xilma-xilligi sizning dietangizni kerakli tarzda tanlash imkonini beradi. Kaloriya tarkibiga kelsak - bizning taomlarimiz haqiqatan ham to'yimli, ammo ular qomatingizga zarar etkazmaydi - biz KBJU (kaloriyalar - yog'lar - oqsillar - uglevodlar) ning optimal kombinatsiyasida tabiiy ingredientlardan foydalanamiz. 😊`
    },
    {
        id: 5,
        header: "Yaqinda men sizning restoranlaringizdan yetkazib berish xizmatidan foydalandim.  Siz uchun qiziqarli g'oyalarim bor (menyu, dizayn, xodimlarning ishi va boshqalar).  Ular haqida sizga qanday qilib ayta olaman ?",
        text: "Shikoyat va takliflar xizmatiga qo'ng'iroq qiling - +998 33 555 80 80, Instagram sahifasida shaxsiy xabar yozing. Biz har doim sizning fikr va tavsiyalaringizni mamnuniyat bilan qabul qilamiz. 😊"
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
                     onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? {height: contentEl.current.scrollHeight}
                    : {height: "0px"}
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <div style={{padding: " 0 0 5rem 0"}}>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="form-heading mb-4 text-primary text-center mt-3">Tez soraladigon savollar
                                    (FAQ)</h4>
                                {faqs.map((faq, index) => {
                                    return (
                                        <div key={index}>
                                            <Helmet>
                                                <meta charSet="utf-8"/>
                                                <title>Tez soraladigon savollar</title>
                                                <meta name="description"
                                                      content="Shaxrixondagi eng zor resoran qaysi?"/>
                                                <meta name="keywords" content={`${faq.header} | `}/>
                                                <link rel="canonical" href="https://akshamnur.uz/"/>
                                            </Helmet>
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                                           faq={faq}/>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion