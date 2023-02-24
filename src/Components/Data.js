import React from 'react'
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";


const Data =[
    {
        name:'Arcade',
        img:arcade,
        year:'90',
        month:'9',
        free:'2 months free'

    },
    
    {
        name:'Advanced',
        img:advanced,
        year:'120',
        month:'12',
        free:'2 months free'

    },
    
    {
        name:'Pro',
        img:pro,
        year:'150',
        month:'15',
        free:'2 months free'

    }
    

    
]


export const addOns = [
    {
      id: 1,
      name: "Online service",
      text: "Access to multiplayer games",
      yearly: 10,
      monthly: 1,
    },
    {
      id: 2,
      name: "Larger storage",
      text: "Extra 1TB of cloud save",
      yearly: 20,
      monthly: 2,
    },
    {
      id: 3,
      name: "Customizable profile",
      text: "Custom theme on your profile",
      yearly: 20,
      monthly: 2,
    },
  ];

export default Data
