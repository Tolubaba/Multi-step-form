import React from "react";
import { useGlobalcontext } from "./Context";

const Header = () => {
  let newindex;

  const {step}=useGlobalcontext()
  const div = [
    { number: 1, steps: "step 1", about: "YOUR INFO" },
    { number: 2, steps: "step 2", about: "SELECT PLAN" },
    { number: 3, steps: "step 3", about: "ADD-ONS" },
    { number: 4, steps: "step 4", about: "SUMMARY" },
  ];
  return (
    <div className="header">
      
      <div className="steps">
        {div.map((item,index)=>{
          {newindex=index+1}


          const {number,steps,about}=item
          return(

            <div className="info">
            <div className={newindex===step?'numbers active':'numbers'}>{number}</div>
            <div>
              <p className="stepp">{steps}</p>
              <p className="stepabout">{about}</p>
            </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default Header;
