import React, { useState } from 'react'
import { Navbar } from './navbar'


export const Header = () => {


  return (
    <>
    <div className="header bg-yellow-50">

      <div className="name text-center"><a href="#" >Modish Moments</a></div>
      
      <Navbar />
    </div>
   
    
    </>
    
  )
}

