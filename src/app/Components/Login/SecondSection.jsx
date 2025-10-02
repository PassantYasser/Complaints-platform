"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function SecondSection() {
  const { t } = useTranslation();
  return (
    <>

      <section className="w-full hidden lg1:block rounded-[10px]"
          
        >
          

        <img src="/coverr.jpeg" alt="Second Part" className='w-full h-screen' />


        
        </section>
    </>
  )
}

export default SecondSection