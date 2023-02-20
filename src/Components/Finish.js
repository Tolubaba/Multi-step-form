import React from 'react'
import { useState } from 'react'
import { useRefft } from 'react'
import { useGlobalcontext } from '../Context'
import { addOns } from './Data'

const Finish = ({selectedoption}) => {
    const {prev,next}=useGlobalcontext()
    console.log(selectedoption)
  return (
    <div className='finish'>
        <h1>Finishing up</h1>
        <p> Double-check everything look OK beofre confirming
        </p>

        <div>
            
        </div>



      
      <div>
        <button onClick={next}>next</button>
        <button onClick={prev}> prev</button>
      </div>
    </div>
  )
}

export default Finish
