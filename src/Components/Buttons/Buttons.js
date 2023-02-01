import React, {useState, useEffect} from "react";
import Style from './button.module.scss';
import {Link} from "react-router-dom";

export function NeonBtn({title,data,setFunc}){
    return <button className={Style.NeonBtn} onClick={data ? ()=>setFunc(data): null}>
        {title}
    </button>
}
export function NeonLinkBtn({title}){
    return <Link to={'/orders'} className={Style.NeonBtn}>
        {title}
    </Link>
}
export function DarkHeaderBtn({title}){
    return <button className={Style.DarkBtn}>{title}</button>
}
export const DoubleButton = ({color, prev, next}) => {
    return <div className={Style.double}>
        <button style={{borderColor: color}} className={Style.double__firstBtn} ref={prev}/>
        <button style={{borderColor: color}} className={Style.double__secondBtn} ref={next}/>
    </div>
}

export function ScrollTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return <div className={Style.scrollTop}>
        {showTopBtn && (<button onClick={goToTop}/>)}
    </div>
}