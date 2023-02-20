import React, { memo, useState  } from 'react'
import MultiStepForm from './Test2';

import Header from './Header'
import Personalinfo from './Components/Personalinfo';
import Plan from './Components/Choice';
import Adds from './Components/Adds';
import Finish from './Components/Finish';
import { useGlobalcontext } from './Context';

const App = () => {

  const [time, settime] = useState(false);
  const changetime = () => {
        settime(!time);

      };

 const handlesubmit=(e)=>{
  e.preventDefault();

 }

 const {step,selectedoption}=useGlobalcontext();
  return (
    <div> 
      {step===2 && <Personalinfo/>} 
      {step===1 && <Plan time={time} changetime={changetime}/>}
       {step==3 && <Adds time={time} changetime={changetime}/>} 
       {step==4 && <Finish selectedoption={selectedoption}/>}
      
      
    
      
    </div>
  )
}

export default App
