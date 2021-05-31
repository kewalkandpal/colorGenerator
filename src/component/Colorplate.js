import React, { useEffect, useState } from 'react';
import rgbTohex from './Rgbtohex';

const Colorplate = ({ rgb, weight, index }) => {
    const [msg, setmsg] = useState(false);
    const hexValue = rgbTohex(...rgb);

    useEffect(()=>{
        let clrTime = setTimeout(()=>{
            setmsg(false)
        },500)
        return ()=>{
            clearTimeout(clrTime)
        }
    },[msg])

    return (
            <div className={`colors ${index > 9 && "changeTextClr"}`} style={{ backgroundColor: `rgb(${rgb})` }} onClick={()=>{
                setmsg(true)
                navigator.clipboard.writeText(hexValue)
            }}>
                <p>{weight}%</p>
                <p>{hexValue}</p>
                {
                    msg ? <p style={{bottom:"20px" , position:"absolute"}}>copied to clipboard</p> : null
                }
            </div>
    )
};

export default Colorplate;