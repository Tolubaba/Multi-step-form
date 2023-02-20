import React from 'react'
import { useState } from 'react';
import { useContext,createContext } from 'react'
const AppContext=createContext();

const AppProvider = ({children}) => {

    


    const [isChecked,setischecked]=useState({
        Onlineservice:'false',
        LargerStoarge:'false',
        CustomizableProfile:'false'

    });
    const [selectedoption,setselectedoption]=useState([])

    
  const [step, setstep]=useState(3)

  const next= ()=>{
    setstep((oldstep)=> oldstep +1)
  }
  
  const prev= ()=>{
    setstep((oldstep)=> oldstep -1)
  }
    


    const handlechecked=(e)=>{
        setischecked({...isChecked,[e.target.name]:e.target.checked})
        const value=e.target.value

        if(e.target.checked){
            setselectedoption([...selectedoption,value])
            
        }
        
        else{
            setselectedoption(selectedoption.filter(option=>option!==value))
        }


        }
        console.log(selectedoption)
    



  return (
    <AppContext.Provider value={{isChecked,handlechecked,selectedoption,next,prev,step}}>
{children}

    </AppContext.Provider>
    


  )
}

const useGlobalcontext=()=>useContext(AppContext)

export {AppProvider,useGlobalcontext}
