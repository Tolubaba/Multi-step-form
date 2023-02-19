import React, { useState } from 'react';
import { useRef } from 'react';
import Singleadd from './singleadd';
import { addOns } from './Data';

const Adds = ({time}) => {
   

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

    


        
        



    
    </div>
        

      
        



    
  )
}

export default Adds
