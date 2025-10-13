"use client"; //  👈Client Component ده يخلي المكون 
import React, { useState } from 'react'
import MainLayout from './Components/MainLayout/MainLayout';
import { useTranslation } from 'react-i18next';
import i18n from "../language/i18n";
import Link from 'next/link';
import Navbar from './Components/MainLayout/Navbar';

function Homepage({ children }) {
    const [open, setOpen] = useState(true);
  
      const { t } = useTranslation();
  
    // Language change handler
    const handleLangChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
      document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    };

  const [active, setActive] = useState("complaints");


  return (
    <>
  
      <MainLayout>
      { children }
      </MainLayout>


      {/* <div className="flex h-screen bg-[#fdfbf5]">
      

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
        اهلا بك فى قسم الشكاوى لجهاز مستقبل مصر
        </h1>

    
        <div className="flex flex-col space-y-4 w-52">
          <Link href='/Complaints' className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            تقديم شكوى جديدة
          </Link>
          <Link href='/FollowUp' className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-800">
            متابعة الشكاوي
          </Link>
        </div>

        
        <p className="mt-6 text-gray-600 text-sm">
          لإرسال شكوى جديدة اضغط على الشكاوي
        </p>

        <div className='flex flex-col'>
          <Link href='/Auth/Login' className="mt-6 text-gray-600 text-sm underline">
            تسجيل دخول 
          </Link>
          <Link href='/Auth/Signup'>
            انشاء حساب
          </Link>
        </div>
      </div>
    </div> */}


      

    </>
  )
}

export default Homepage
