"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function SecondSection() {
  const { t } = useTranslation();
  return (
    <>
{/* bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 */}
      <section className="w-full hidden lg1:block  ">
          
        <div className='flex justify-center items-center '>
          <img src="/coverr.jpeg" alt="Second Part"  />
        </div>
 
        </section>
    </>
  )
}

export default SecondSection