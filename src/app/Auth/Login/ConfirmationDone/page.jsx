
"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import SecondSection from '@/app/Components/Login/SecondSection';
function ConfirmationDonePage() {
  
      const { t } = useTranslation();
  

  return (
    <>
    <div className=' lg1:flex justify-between gap-8 '>
      <section className='w-full mt-37.5 lg1:mt-31 px-8'>
        
        <div className='flex flex-col items-center gap-4'>
          <p className='text-[#0F022E] text-2xl font-bold'>{t('It was successful!')}🤩</p>
          <p className='text-[#656565] text-lg font-medium'>{t('You can now log in with your new password.')}</p>
          <img src="/images/ConfirmationDone.svg" alt="" className='mt-10 mb-12 lg1:(mb-20 ,mt-14)' />
        </div>
        <div>
          <Link href='/Auth/Login'>
            <button  
              className='w-full h-15 bg-[#DDA918] text-white text-base font-medium rounded-[3px] '>
                {t('Log in')}
            </button>
          </Link>
        </div>


      </section>
      

  
        
        <SecondSection/>
  
      </div>


    </>
  )
}

export default ConfirmationDonePage