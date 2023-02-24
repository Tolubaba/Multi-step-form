import React, { createContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import Data from "./Data";
import { useGlobalcontext } from "../Context";

const Plan = ({time ,changetime}) => {

  const {next,prev,pick,setpick,page,setpage,setpick1,setpick2}=useGlobalcontext()
  



  const refs=useRef([])
  const refs1=useRef([])
  const refs2=useRef([])
   
    

    

  

const setbackground = (index) => {
    setpage(index)
  if(time){
    setpick1(refs1.current[index].textContent.slice(2,-3))
  }
  else{
    setpick1(refs2.current[index].textContent.slice(1,-3))
  }
  

    
    
    setpick(refs.current[index].textContent)
  

  };


  return (
    
    
    
    

    <div className="plandiv">

        
      <h1>Select your plan </h1>
      <p className="planp"> you have the option of monthly or yearly biling</p>
      <div className="chooseplan">

      {Data.map(( item,index)=>{
        const {name,img,year,month,free}=item
        return (

            
            <div className={`${name} ${index==page?'background':''}`} key={index} onClick={()=>setbackground(index)}>
            <div className="planword">
              <img src={img} alt="name" />
            </div>
            <div className="word">
              <h4 ref={el=>(refs.current[index]=el)} >{name}</h4>
              {time ? (
                <div>
  
                  <p ref={el=>(refs1.current[index]=el)}> {`$${year}/yr`}</p> <small>{free}</small>
                </div>
              ) : (
                <p ref={el=>(refs2.current[index]=el)}>{`$${month}/mo`}</p>
              )}
            </div>
          </div>

        )




    })}
     
       </div>

      <div className="toggletime">
        <p className="monthly"> Monthly</p>

        <div className="buttondiv">
          <button
            className={time ? `button add` : `button`}
            onClick={changetime}
          ></button>
        </div>
        <p> Yearly</p>
      </div>


    </div>

    
    
  );
  

  

};


export default Plan;
