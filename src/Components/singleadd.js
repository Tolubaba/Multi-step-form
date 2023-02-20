import React from 'react';
import { useState } from 'react';
import { useGlobalcontext } from '../Context';
const Singleadd = ({time,name,text,yearly,monthly}) => {

    const {handlechecked,isChecked}=useGlobalcontext()

   
  return (
    <div className='divchecked'>
        

    <div className='online-div'>
    <input type='checkbox' className='checkbox'  checked={isChecked[name]} value={name} name={name} onChange={handlechecked}/> 

    <div>
        
    <h4> {name}</h4>
    <p className='checkword'> {text}</p>

    </div>
    </div>
    {time?<p className='price'>+${yearly}/yr</p>:<p className='price'>+${monthly}/mo</p>}
    
    



</div>
  )
}

export default Singleadd
