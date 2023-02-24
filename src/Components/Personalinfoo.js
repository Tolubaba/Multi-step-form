import React, { useState } from 'react';
import { useGlobalcontext } from '../Context';

  export default function MyForm() {
  const {name,email,number,handleChange,handleSubmit,errors}=useGlobalcontext()

  // handleChange method to update state as input values change
  
  return (

    <div className='personalinfodiv'> 
       <h1> Personal info</h1>
      <p> please provide your name, email address, and phone number </p>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name {errors.name && <small>{errors.name}</small>}</label>
        <input
          type="text"
          name="name"
          placeholder="e.g .Stephen King"
          value={name}
          onChange={handleChange}
        />
        
      </div>

      <div>
        <label htmlFor="email">Email {errors.email && <small>{errors.email}</small>}</label>
        <input
          type="email"
          name="email"
          placeholder='e.g. stephenking@lorem.com'
          value={email}
          onChange={handleChange}
        />
        
      </div>

      <div>
        <label htmlFor="number">Phone Number {errors.number && <small>{errors.number}</small>}</label>
        <input
          type="tel"
          name="number"
          placeholder='e.g.+123 456 890'
          value={number}
          onChange={handleChange}
        />
        
      </div>
    </form>

    </div>
  );
}
