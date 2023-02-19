import React, { memo, useState  } from 'react'

import Header from './Header'
import Personalinfo from './Components/Personalinfo';
import Plan from './Components/Choice';
import Adds from './Components/Adds';
import Finish from './Components/Finish';

const App = () => {

  const [time, settime] = useState(false);
  const changetime = () => {
        settime(!time);

      };

 const handlesubmit=(e)=>{
  e.preventDefault();

 }
  const [step, setstep]=useState(4)

  const next= memo(()=>{
    setstep((oldstep)=> oldstep +1)
  })
  
  const prev= memo(()=>{
    setstep((oldstep)=> oldstep -1)
  })
  return (
    <div> 
      {step===2 && <Personalinfo/>} 
      {step===1 && <Plan time={time} changetime={changetime}/>}
       {step==3 && <Adds time={time} changetime={changetime}/>} 
       {step===4 && <Finish/>}
      
    </div>
  )
}

export default App
