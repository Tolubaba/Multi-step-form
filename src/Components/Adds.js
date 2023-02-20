import React, { useState } from 'react';
import { useRef } from 'react';
import Singleadd from './singleadd';
import { addOns } from './Data';
import { useGlobalcontext } from '../Context';

const Adds = ({time}) => {
    const {next,prev}=useGlobalcontext()
   
 
  return (
    <div className='div-adds-on'> 
    <h1> Pick-add-ons</h1>
    <p className='addsword'> Add-ons help enhance your gaming experince</p>
    {addOns.map((item,index)=>{
        return (
            <div key={index}>
            <Singleadd  time={time} index={index} {...item}/>
            
            </ div>

        )


    })}

    <div>
        
        <button onClick={next}> next </button>
        <button onClick={prev}> prev</button>
    </div>


    


        
        



    
    </div>
        

      
        



    
  )
}

export default Adds
