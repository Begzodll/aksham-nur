import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Style from './button.module.scss'

export function NeonBtn({title}){
    return <button className={Style.NeonBtn}>
        {title}
    </button>
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
    const buttonVariants = {
        visible:{
            transition:{ type:'spring', stiffness:200, delay:1}
        },
        hover:{
            scale:1.1,
            transition:{
                duration:.3,
                yoyo:Infinity,
            }
        },
    }

    return <div className={Style.scrollTop}>
        {showTopBtn && (<motion.button
            onClick={goToTop}
            variants={buttonVariants}
            animate={'visible'}
            whileHover={'hover'}
            drag
            draggable={false}
            dragDirectionLock
            dragConstraints={{left:0,right:0,top:0,bottom:0}}
        />)}
    </div>
}