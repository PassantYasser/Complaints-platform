"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'

function MainLayout({children}) {

  return (
  <div className="flex">
    <div className="flex flex-1 flex-col mt-5 ">
      <div className='fixed top-0 w-full z-100'>
        <Navbar  />
      </div>
      <main className="">{children}</main>
    </div>
  </div>  
  )
}

export default MainLayout