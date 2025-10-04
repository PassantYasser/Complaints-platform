"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function SecondSection() {
  const { t } = useTranslation();
  return (
    <>
{/* bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 */}
      <section className="w-full hidden lg1:block h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-white">
          
        <div className='flex justify-center items-center h-full'>
          <img src="/loggggggo.png" alt="Second Part" className='w-100' />
        </div>
 
        </section>
    </>
  )
}

export default SecondSection