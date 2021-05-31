const clrConvert = (rgb)=>{
    let hex = rgb.toString(16);
    if(hex < 2){
        hex = "0" + hex;
    }
   return hex;
};


const rgbTohex = (r,g,b) =>{
    let hexClr = "#" + clrConvert(r) + clrConvert(g) + clrConvert(b);
    return hexClr;
}

export default rgbTohex;
