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

  const {next,prev}=useGlobalcontext()
  const [pick,setpick]=useState('')



    const ref4=useRef(null)
   
    const [page,setpage]=useState(0)

    

  

  const setbackground = (index) => {
    setpage(index)
    console.log(page)

    setpick(index)

  
    

    
    

  };

  return (
    
    
    
    

    <div className="plandiv">

        
      <h1>Select your plan </h1>
      <p> you have the option of monthly or yearly biling</p>
      <div className="chooseplan">

      {Data.map(( item,index)=>{
        const {name,img,year,month,free}=item
        return (

            
            <div className={`${name} ${index==page?'background':''}`} key={index} onClick={()=>setbackground(index)}>
            <div>
              <img src={img} alt="name" />
            </div>
            <div className="word">
              <h4 ref={ref4}>{name}</h4>
              {time ? (
                <div>
  
                  <p> {year}</p> <small>{free}</small>
                </div>
              ) : (
                <p>{month}</p>
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
        <p> yearly</p>
      </div>



      
    <div>
        
        <button onClick={next}> next </button>
        <button onClick={prev}> prev</button>
    </div>
    </div>

    
    
  );
  

  

};


export default Plan;
