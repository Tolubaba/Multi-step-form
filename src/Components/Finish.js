import React from 'react'
import { useState } from 'react'
import { useRefft } from 'react'
import { useGlobalcontext } from '../Context'
import { addOns } from './Data'

const Finish = () => {
    const {selectedoption}=useGlobalcontext()
    console.log(selectedoption)
  return (
    <div>
      
    </div>
  )
}

export default Finish
