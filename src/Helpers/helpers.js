import React, { useState, useEffect} from "react";

export function useWindowDimensions(){

    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(()=>{
        const handlerResize = () => {
            setSize([ window.innerWidth, window.innerHeight ]);
        };
        window.addEventListener('resize', handlerResize);
        return () => {
            window.removeEventListener('resize',handlerResize);
        }
    },[]);
    return size;
}

export const TargetPhoneNumber = (val) => {
    if (!val) return val;
    const number = val.replace(/[^\d]/g, '');
    const length = number.length;

    if (length < 4) return length;
    if (length < 7) return `+${number.slice(0, 3)} ${number.slice(3)}`;

    return `+${number.slice(0, 3)} (${number.slice(3, 5)}) ${number.slice(5, 8,)} - ${number.slice(8, 12)}`;
}