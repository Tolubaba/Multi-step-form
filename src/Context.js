import React from 'react'
import { useState } from 'react';
import { useContext,createContext } from 'react'
const AppContext=createContext();

const AppProvider = ({children}) => {

    const [isChecked,setischecked]=useState(false);
    const [selectetedoption,setselectedoption]=useState([])
    


    const handlechecked=(e)=>{
        setischecked(e.target.checked)
        const value=e.target.value

        if(e.target.checked){
            setselectedoption([...selectetedoption,value])
            
        }
        
        else{
            setselectedoption(selectetedoption.filter(option=>option!==value))
        }


        }
        console.log(selectetedoption)
    



  return (
    <AppContext.Provider value={{isChecked,handlechecked,selectetedoption}}>
{children}

    </AppContext.Provider>
    


  )
}

const useGlobalcontext=()=>useContext(AppContext)

export {AppProvider,useGlobalcontext}
