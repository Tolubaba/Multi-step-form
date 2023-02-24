import React from 'react'
import { useState } from 'react'
import { useRefft } from 'react'
import { useGlobalcontext } from '../Context'
import { addOns } from './Data'

const Finish = ({selectedoption,time}) => {
    const {prev,next,pick,page,pick1,setstep}=useGlobalcontext()
    let filterarray 
    let month;
    let price;
    let sum; 

    let choose=parseInt(pick1)
    
    if(selectedoption){
     filterarray=addOns.filter(item=>selectedoption.includes(item.name))
     {console.log(filterarray)}
    }
    if(time){
        month='(Yearly)'
    }
    else{
        month='(Monthly)'
    }

    if(time){
         sum=filterarray.reduce((accumulator,cuurentValue)=> accumulator +cuurentValue.yearly,0)


    }
    else{
    sum=filterarray.reduce((accumulator,cuurentValue)=> accumulator +cuurentValue.monthly,0)

    }

    
    



    console.log(sum)


  return (
    <div className='finish'>
        <h1>Finishing up</h1>
        <p className='finishp'> Double-check everything look OK before confirming
        </p>

        {pick?
        <div>
        <div className='finishword'>

        
            


            {pick?<div className='finishplan'> <div><h4> {pick}{month}</h4> <p className='change' onClick={()=>setstep(2)}>change</p></div> <p className='pick1'>{`$${pick1}`}{time?`/yr`:`/mo`}</p> </div>:null}

            {filterarray.map((item)=>{

                const{name,yearly,monthly}=item
             

                {time?price=yearly:price=monthly}
                return(
                    <div className='filterarray'> <p className='filtername'>{name}</p> <p className='filterprice'>{`+$${price}`}{time?`/yr`:`/mo`}</p></div>

                )

            })}


           
        </div>{<div className='finishtotal'> <p>Total{`${time?`(per year)`:`(per month)`}`}</p> {time?<p className='total'>${sum+choose}/yr</p>:<p className='total'>+${sum+choose}/mo</p>}</div>} </div>:null
}


 
    
    </div>
  )
}

export default Finish
