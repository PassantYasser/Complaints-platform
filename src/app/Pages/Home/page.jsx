"use client";
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function HomePage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className=''>
        <div className='lg1:flex'>

          {/* Section Image (Mobile) */}
          <motion.section
            className='lg1:hidden w-full mt-20'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex justify-center'>
              <img src="/complaintss.webp" alt="" className='' />
            </div>
          </motion.section>

          {/* Section Text */}
          <motion.section
            className='w-full p-8 flex flex-col justify-center items-center text-center lg1:items-start'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className='text-gray-600 text-4xl font-semibold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              معًا نحو مستقبلٍ رقميٍ أفضل
            </motion.p>

            <motion.p
              className='text-gray-600 text-md font-medium mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              انضم إلى منصة "جهاز مستقبل مصر" وابدأ رحلتك في عالم التحول الرقمي بخطوات واثقة.
            </motion.p>

            <motion.div
              className='flex justify-center lg1:justify-start gap-4 mt-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link href='/Auth/Signup' className='border border-[#DDA918] text-[#DDA918]  font-semibold rounded-[4px] px-8 py-4 transition-all duration-300 hover:bg-[#c79b10] hover:text-[#fff]'>
                {t('Create an account')}
              </Link>
              <Link href='/Auth/Login' className='bg-[#DDA918] text-white font-semibold rounded-[4px] px-8 py-4 hover:bg-[#f8f5ed] hover:text-[#c79b10] hover:border hover:border-[#c79b10] transition-all duration-300'>
                {t('Log in')}
              </Link>
            </motion.div>
          </motion.section>

          {/* Section Image (Desktop) */}
          <motion.section
            className='lg1:block hidden w-full mt-20'
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='flex justify-center'>
              <img src="/registeration2.jpg" alt="" className='w-200 h-100' />
            </div>
          </motion.section>

        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
