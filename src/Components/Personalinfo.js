import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Personalinfo = () => {

  const handlesubmit=(e)=>{
    e.preventDefault();
  }

  const [formvalues, setformvalues] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  const [errors,seterrors]=useState({});

  const  validate=(formvalues)=>{
    let errors={};

    if(!formvalues.name){
      errors.name='Name is required'
    }
    if(!formvalues.email){
      errors.name='Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formvalues.email)) {
      errors.email = 'Email is invalid';
    }

    if(!formvalues.phoneno){
      errors.phoneno='Number required'
    }
    seterrors(errors)

    return Object.keys(errors)===0;

  }
  const getclassname=(fieldname)=>{
    return errors[fieldname]?'input-error':''
  }



  return (
    <div className="personalinfodiv">
      <h1> Personal info</h1>
      <p> please provide your name, email address, and phone number </p>

      <form>
        <div>
          <label htmlFor="name">
            Name

          </label>

        
        <input
        type='text'
          value={formvalues.name}
          placeholder="e.g .Stephen King"
          id="name"
          name="name"
          className={getclassname('name')}
          onChange={(e) =>
            setformvalues({ ...formvalues, name: e.target.value })
          }
        />
        {errors.name && <small> {errors.name}</small>}
        </div>
        <div>
          <label htmlFor="email"> Email Address</label>
        <input
        typeof="email"
          value={formvalues.email}
          placeholder='e.g. stephenking@lorem.com'
          id="email"
          name='email'
          className={getclassname('email')}
          onChange={(e) =>
            setformvalues({ ...formvalues, email: e.target.value })
          }
        />
        {errors.name && <small> {errors.name}</small>}
        </div>



        <div>
          <label htmlFor="phone"> Phone number</label>
        <input
        type='text'
          value={formvalues.phoneno}
          placeholder='e.g. +1 2 3 4 5 6 7 8 9 0'
          id="phone"
          name="phoneno"
          className={getclassname('phoneno')}
          onChange={(e) =>
            setformvalues({ ...formvalues, phoneno: e.target.value })
          }
        />
        </div>
      </form>
    </div>
  );
};

export default Personalinfo;
