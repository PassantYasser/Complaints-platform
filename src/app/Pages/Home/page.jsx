"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import Navbar from '@/app/Components/MainLayout/Navbar'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'


function HomePage() {
  const {t}= useTranslation()
  return (
    <MainLayout>
    <div className='  '>
        <div className='lg1:flex   '>
          <section className='lg1:hidden   w-full   mt-20'>
            <div className=' flex justify-center'>
            <img src="/complaintss.webp" alt="" className=' ' />
            </div>
          </section>
      
          <section className='w-full p-8 flex flex-col  justify-center items-center text-center lg1:items-start  '>
            <p className='text-gray-600 text-4xl font-semibold'>
              {t('Welcome to the Complaints and Inquiries Department')}
            </p>
      
            <p className='text-gray-600 text-lg font-medium mt-3'>
              {t('Providing a management system for the inquiries and complaints department')}
            </p>
      
            <div className='flex justify-center lg1:justify-start  gap-4 mt-8'>
              <Link href='/Pages/Complaints' className='bg-[#DDA918] text-white font-semibold rounded-[4px]  px-8 py-4'>
                {t('Complaints')}
              </Link>
      
              <Link href='/Pages/FollowUp' className='border border-[#DDA918] text-[#DDA918] font-semibold rounded-[4px]  px-8 py-4'>
                {t('Follow-up complaints')}
              </Link>
            </div>
          </section>
      
      
          <section className='lg1:block hidden w-full   mt-20'>
            <div className=' flex justify-center'>
            <img src="/complaintss.webp" alt="" className='w-200 h-100  ' />
            </div>
          </section>
          
        
        </div>
    </div>
    </MainLayout>
  )
}

export default HomePage