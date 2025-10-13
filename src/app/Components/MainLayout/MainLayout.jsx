"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'

function MainLayout({children}) {

  return (
  <div className="flex">
    <div className="flex flex-1 flex-col">
      <Navbar  />
      <main className="">{children}</main>
    </div>
  </div>  
  )
}

export default MainLayout