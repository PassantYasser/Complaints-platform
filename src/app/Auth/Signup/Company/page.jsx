"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CompanyInformationPage from './CompanyInformation/page';
import OwnerInformationPage from './OwnerInformation/page';
import SetPasswordPage from './SetPassword/page';
import VerificationPage from './Verification/page';
import SecondSection from '@/app/Components/Login/SecondSection';

function CompanyPage() {
  const {t}= useTranslation()

  const steps = [
  { id: 0, title: t('Company Owner Information') ,icon:'/images/icons/OwnerInformation.svg' },
  { id: 1, title:t('Verification Code') ,icon:'/images/icons/Verification.svg' },
  { id: 2, title: t('Set Password') ,icon:'/images/icons/SetPassword.svg'  },
  { id: 3, title: t('Company Information') ,icon:'/images/icons/CompanyInformation.svg'  },
];

const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <OwnerInformationPage onNext={handleNext} onPrev={handlePrev} currentStep={currentStep} steps={steps} />;
      case 1:
        return <VerificationPage onNext={handleNext} onPrev={handlePrev}  currentStep={currentStep} steps={steps} />;
      case 2:
        return <SetPasswordPage onNext={handleNext} onPrev={handlePrev} currentStep={currentStep} steps={steps} />;
      case 3:
        return <CompanyInformationPage onNext={handleNext} onPrev={handlePrev} currentStep={currentStep} steps={steps}  />; 
      default:
        return null;
    }
  };

  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8  ">
        <section className="w-full mt-10 lg1:mt-2  ">
          {/* title */}
          <div className='flex flex-col items-center gap-3 mb-10'>
            <p className='text-[#9E7A11] text-2xl font-medium'>
              {t('Create a new account!')}
            </p>
            <p className='text-[#656565] text-xl font-normal'>
              {t('Complete simple steps to start your journey with us.')}
            </p>
          </div>
          
          {/*  */}
          <div dir="rtl" className="w-full max-w-2xl mx-auto px-6">
            <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto mb-6">
            {steps.map((s, index) => {
            const isActive = index <= currentStep;
            return (
                <div key={s.id} className="flex-1 flex flex-col items-center relative">
                    {/* circle */}
                    <div
                      className={`rounded-full w-12 h-12 flex items-center justify-center bg-white z-10
                        ${isActive ? "border border-dotted border-[#C69815]" : ""}
                      `}
                    >
                      <div
                        className={`w-9.5 h-9.5 flex items-center justify-center rounded-full p-1  
                          ${
                            isActive
                              ? "bg-[#C69815] border border-[#C69815]"
                              : "bg-[#F8FAFC] border border-[#9AA4B2]"
                          }
                        `}
                      >
                        <img
                          src={s.icon}
                          alt=""
                          className={`${
                            isActive
                              ? "invert brightness-0 sepia saturate-200 hue-rotate-[35deg]"
                              : ""
                          }`}
                        />
                      </div>
                    </div>

                  {/* title  */}
                  <span className="text-xs mt-2 text-center">{s.title}</span>

                  {/* line between each circle*/}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-6 right-17 w-full border-t border-dashed
                        ${
                          currentStep > index
                            ? "border-[#C69815]" 
                            : "border-[#D0D0D0]" 
                        }
                      `}
                    ></div>
                  )}
                </div>
              );
            })}

            </div>
            <div className="mb-6">{renderStepContent()}</div>
          </div>
  
        </section>


        <SecondSection/>
      </div>

    </>
  )
}

export default CompanyPage