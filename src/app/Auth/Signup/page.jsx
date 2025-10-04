"use client";
import SecondSection from '@/app/Components/Login/SecondSection';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import infoOnePage from './InfoOne/page';
import infoTwoPage from './InfoTwo/page';
import InfoOnePage from './InfoOne/page';
import InfoTwoPage from './InfoTwo/page';


function SignuPage() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1); // 👈 لتحديد المرحلة الحالية

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1); // 👈 ينتقل للمرحلة التالية
  };

  const handlePrev = () => {
    setStep(step - 1); // 👈 للرجوع
  };

  return (
    <div className="lg1:flex justify-between gap-8">
      <section className="pt-8 px-8 w-full">
          <div className='flex justify-end'>
            <img
            src="/loggggggo.png"
            alt="Logo"
            className="w-28 mb-4" 
            />
          </div>
          

        <h2 className="text-2xl font-semibold text-center text-[#9E7A11] mb-8">
          إنشاء حساب جديد
        </h2>

        <form className="flex flex-col gap-4">
          {step === 1 && (
            <InfoOnePage handleNext={handleNext}/>
          )}



          {step === 2 && (
            <InfoTwoPage handleNext={handleNext} handlePrev={handlePrev} />
          
          )}
        </form>

        <p className="flex justify-center gap-1.5 mt-4">
          <span className="text-[#697586] text-lg font-normal">
            {t("Already have an account?")}
          </span>
          <Link href="/Auth/Login" className="text-[#9E7A11] text-lg font-medium">
            {t("Log in")}
          </Link>
        </p>
      </section>

      <SecondSection />
    </div>
  );
}

export default SignuPage;
