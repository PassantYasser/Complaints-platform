"use client";
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next'

function SignuPage() {
  const {t}= useTranslation()
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        <section className="w-full mt-12.5 lg1:mt-28.5 ">
          <div className='mb-37.5'>
            <div className='flex justify-center gap-1  mb-6'>
              <img src="/images/LogoText.svg" alt="" />
              <img src="/images/Logo.svg" alt="" />
            </div>
            <p className='text-[#364152] text-xl font-normal text-center '>{t('Welcome to our platform, where your journey begins with ease and clarity.')}</p>
          </div>

          <div className='flex flex-col items-center mb-14'>
            <p className='text-[#9E7A11] text-2xl font-medium mb-6'>{t('Choose your account type to get started?')}</p>
            <p className='w-[500px] text-center text-[#656565] text-xl font-normal'>{t('Please select whether you are registering as a company or as an individual to provide you with a personalized experience that suits your needs.')}</p>
          </div>

          <div className='flex justify-center gap-12'>
            <Link href='/Auth/Signup/Company' className='flex flex-col justify-center w-62.5 h-62.5 border border-[#C69815] bg-[#F9F5E8] rounded-[3px]'>
              <span className='flex justify-center mb-5'>
                <img src="/images/Company.svg" alt="" />
              </span>
              <p className='flex justify-center text-[#000] text-2xl font-medium'>{t('Company')} </p>
            </Link>

            <Link href='/Auth/Signup/Freelance' className='flex flex-col justify-center w-62.5 h-62.5 border border-[#C69815] bg-[#F9F5E8] rounded-[3px]'>
              <span className='flex justify-center mb-5'>
                <img src="/images/Freelance.svg" alt="" />
              </span>
              <span className='flex justify-center text-[#000] text-2xl font-medium'>{t('Freelance')} </span>
            </Link>
          
          </div>
        </section>

          <section className="w-full hidden lg1:block rounded-[10px]"
          style={{
            background:
              "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)",
          }}
        >
          <p className="flex justify-end ml-4">
            <img src="/images/AuthLogUP.png" alt="" className='w-29 h-49' />
          </p>

          <div className="mt-4.5 w-[70%] mx-auto flex flex-col gap-4 text-center text-white ">
            <p className="text-3xl font-bold">
              {t("Join the ZETIME Partner Network")}
            </p>
            <p className="text-lg font-normal leading-9">
              {t(
                "Register now and get the tools you need to reach a wider customer base and achieve your goals efficiently."
              )}
            </p>
            <p className="mt-20">
              <img src="/images/AuthLogMiddle.svg" alt="" />
            </p>
          </div>

          <p className="  ">
            <img src="/images/AuthLogDown.svg" alt="" className='w-29 h-49' />
          </p>
        </section>
      </div>

    </>
  )
}

export default SignuPage