import React, { useState} from 'react';
import './App.css';
import Colorplate from './Colorplate';
import Allcolor from 'values.js';

const App = () =>{
    const [color , setcolor] = useState();
    const [error , seterror] = useState(false);
    const [list , setlist] = useState(new Allcolor("#f5428d").all(10));

    function generateClr (){
        try{
            let colors = new Allcolor(color).all(10);
            // console.log(colors);
            setlist(colors);
        }
        catch(error){
          seterror(true)      
        }  
    };

    return(
        <>

            <div className="main">
                <h2>GENERATE</h2>
               <input type="text" placeholder="#f5428d" className={`${error ? "geterror" : null}`} onChange={(e)=>{
                   setcolor(e.target.value);
               }} />
               <button className="btn" onClick={generateClr}>Submit</button>
            </div>
            <div className="clrDiv">
            {
                list.map((color,index)=>{
                    return(
                        <>
                         <Colorplate key={index} {...color} index={index}/>
                        </>
                    )
                })
            }
           </div>
        </>
    )
};

export default App;