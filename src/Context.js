import React from 'react'
import { useState } from 'react';
import { useContext,createContext } from 'react'
const AppContext=createContext();

const AppProvider = ({children}) => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setnumber] = useState('');
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'number':
        setnumber(value);
        break;
      
      default:
        break;
    }
  }

  function handleSubmit() {

    // perform form validation
     validateForm();

    // if errors, update state with errors object
    
  }


  function validateForm() {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    } else{
        errors.name=''
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
    test(email)) {
      errors.email = 'Email is invalid';
    } else{
        errors.email=''   
    }

    if (!number) {
      errors.number = 'Phone Number is required';
    } else if ( !/^\+?\d{8,14}$/.test(number.replace(/\s+/g,""))
    ) {
      errors.number = 'Phone number not correct';
    }else{
        
        
        errors.number=''
        }


setErrors(errors)

     
  }





    const [pick,setpick]=useState('')

    const [pick1,setpick1]=useState('')
    const[pick2,setpick2]=useState('')
    const [page,setpage]=useState('')


    const [isChecked,setischecked]=useState({
        Onlineservice:'false',
        LargerStoarge:'false',
        CustomizableProfile:'false'

    });
    const [selectedoption,setselectedoption]=useState([])

    
  const [step, setstep]=useState(1)

  const next= ()=>{

    handleSubmit();

    if(step===1){
        if((name)&&(email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))&&(number && /^\+?\d{8,14}$/.test(number.replace(/\s+/g,"")))){
            setstep((oldstep)=> oldstep +1)
            console.log('tolu')
        }
        else{
            setstep((oldstep)=>oldstep)
        }
    }

    else{
        setstep((oldstep)=>oldstep+1)
    }

    
     
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
    
    



  return (
    <AppContext.Provider value={{isChecked,handlechecked,selectedoption,next,prev,step,pick,setpick,page,setpage,pick1,pick2,setpick1,setpick2,setstep,validateForm,handleSubmit,handleChange,name,number,email,errors}}>
{children}

    </AppContext.Provider>
    


  )
}

const useGlobalcontext=()=>useContext(AppContext)

export {AppProvider,useGlobalcontext}
