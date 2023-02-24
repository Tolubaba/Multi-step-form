import React, { memo, useState  } from 'react'
import MultiStepForm from './Test2';

import Header from './Header'
import Personalinfo from './Components/Personalinfo';
import Plan from './Components/Choice';
import Adds from './Components/Adds';
import Finish from './Components/Finish';
import MyForm from './Components/Personalinfoo';
import { useGlobalcontext } from './Context';
import Thankyou from './Components/Thankyou';
import { MyComponent } from './Components/ref';

const App = () => {

  const [time, settime] = useState(false);
  const changetime = () => {
        settime(!time);

      };



 const {step,selectedoption,prev,next,handleSubmit}=useGlobalcontext();

 const getstep=()=>{

 if(step===4){

  return(
    <div className='direction'> <button onClick={prev} className='back'>Go Back</button> <button className='submit'>Confirm</button></div>
  )
 }
 else{
  return(
<div className='direction'> <button onClick={prev} className='back'>Go Back</button> <button className='next' onClick={next}>Next Step</button></div>
  )
 }
}


  return (
    <div className='main'> 

      <Header/>

      <div className='body'>

        <div className='bodyword'>

        
      {step===1 && <MyForm/>} 
      {step===2 && <Plan time={time} changetime={changetime}/>}
       {step==3 && <Adds time={time} changetime={changetime}/>} 
       {step==4 && <Finish selectedoption={selectedoption} time={time}/>}
       </div>


       { <div className='button'>

{step===1?<div className='direction'> <button onClick={prev} className='backk'>Go Back</button><button className='next' onClick={next}>Next Step</button></div>:getstep()}


</div> }

      </div>

     
   
      
      
      
    
      
    </div>
  )
}

export default App
