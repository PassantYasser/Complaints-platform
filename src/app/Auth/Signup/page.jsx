"use client";
import SecondSection from '@/app/Components/Login/SecondSection';
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next'

function SignuPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="lg1:flex justify-between gap-8">
        
        <section className="pt-8 px-8 w-full ">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-[#364152] mb-8">
            إنشاء حساب جديد
          </h2>

          <form className="flex flex-col gap-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#364152] fontSizeA font-normal" htmlFor="firstName">
                  {t("First Name")} 
                </label>
                <input
                  className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder={t("First Name")}
                />
              </div>
            
              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#364152] fontSizeA font-normal" htmlFor="lastName">
             اسم العائلة
                </label>
                <input
                  className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder={t("Last Name")}
                />
              </div>
          </div>

            {/* Username */}
            <div className="flex flex-col gap-2">
              <label className="text-[#364152] fontSizeA font-normal" htmlFor="username">
                 البريد الإلكتروني
              </label>
              <input
                className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="text"
                name="email"
                id="email"
                placeholder='البريد الإلكتروني'              />
            </div>

            {/* National ID */}
            <div className="flex flex-col gap-2">
              <label className="text-[#364152] fontSizeA font-normal" htmlFor="nationalId">
                الرقم القومي
              </label>
              <input
                className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="text"
                name="nationalId"
                id="nationalId"
                placeholder="الرقم القومي"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#364152] fontSizeA font-normal" htmlFor="password">
                 كلمة المرور
              </label>
              <input
                className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="كلمة المرور"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#364152] fontSizeA font-normal" htmlFor="confirmPassword">
                 تأكيد كلمة المرور
              </label>
              <input
                className="w-full h-10 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder='تأكيد كلمة المرور'
              />
            </div>

            {/* Submit Button */}
            <button className="w-full h-10 bg-[#DDA918] text-white text-base font-medium rounded-[3px] mt-2  ">
              {t("Sign Up")}
            </button>

            {/* Login Link */}
            <p className="flex justify-center gap-1.5">
              <span className="text-[#697586] text-lg font-normal">
                {t("Already have an account?")}
              </span>
              <Link href='/Auth/Login' className="text-[#9E7A11] text-lg font-medium">
                {t("Log in")}
              </Link>
            </p>

          </form>
        </section>

        <SecondSection/>
      </div>
    </>
  )
}

export default SignuPage;
