"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Navbar() {
  const {t}= useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
    {/* tab && lab */}
    <div className='md:block hidden'>
        <header className="bg-[#fff] border-b border-[#E3E8EF] flex justify-between border py-2 w-full" dir='ltr'>
            {/* left side */}
          <Link href='/' className="px-3 w-full" >
            <img
              src="/logoiconch.png"
              alt="User"
              width="50px"
              height="50px"
              className="rounded-full"
            />
          </Link>   
          {/* right side */}
          <div className="flex justify-center items-center  w-full" dir='ltr'>
            <ul className='flex gap-10 text-[#DDA918] text-lg '>
              <li className='cursor-pointer'><Link href='/Pages/Home'>{t('Home')}</Link></li>
              <li className='cursor-pointer'><Link href='/Pages/AboutUs'>{t('AboutUs')}</Link></li>
              <li className='cursor-pointer'><Link href='/Pages/Contact'>{t('contact')}</Link></li>
              <li className='cursor-pointer'><Link href='/Pages/Home'>{t('Complaints')}</Link></li>
            </ul>
          </div>
      
      
          <div className='flex justify-end items-center px-3 w-full'>
            <Link href='/Auth/Login' className='bg-[#DDA918] text-white font-medium text-base py-3 px-3  rounded-full'>{t('Log in')}</Link>
          </div>
      
        
          </header>
    </div>

    {/* mobile */}
 <div className="md:hidden block">
      <header className="bg-white border-b border-[#E3E8EF] flex justify-between items-center py-3 px-4 w-full relative">
        {/* الزرار في الأعلى على اليمين */}
        <div className="w-full ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#DDA918] focus:outline-none"
          >
            {/* أيقونة الهامبرجر */}
            {!menuOpen ? (
              <div className="space-y-1">
                <span className="block w-7 h-[2px] bg-[#DDA918]"></span>
                <span className="block w-7 h-[2px] bg-[#DDA918]"></span>
                <span className="block w-7 h-[2px] bg-[#DDA918]"></span>
              </div>
            ) : (
              // أيقونة X عند الفتح
              <div className="relative w-6 h-6">
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-[#DDA918] rotate-45"></span>
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-[#DDA918] -rotate-45"></span>
              </div>
            )}
          </button>
        </div>

        {/* اللوجو في النص تحت الزرار */}
        <Link href="/" className="flex justify-center mt-2">
          <img
            src="/logoiconch.png"
            alt="logo"
            width="55"
            height="55"
            className="rounded-full"
          />
        </Link>

        {/* القائمة المنسدلة */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-[#E3E8EF] flex flex-col text-center z-50">
            <Link
              href="/"
              className="py-3 border-b border-[#E3E8EF] text-[#364152] hover:bg-[#F8FAFC]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/Pages/AboutUs"
              className="py-3 border-b border-[#E3E8EF] text-[#364152] hover:bg-[#F8FAFC]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Pages/Contact"
              className="py-3 border-b border-[#E3E8EF] text-[#364152] hover:bg-[#F8FAFC]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/Pages/Home"
              className="py-3 border-b border-[#E3E8EF] text-[#364152] hover:bg-[#F8FAFC]"
              onClick={() => setMenuOpen(false)}
            >
              Complaints
            </Link>
            <Link
              href="/Auth/Login"
              className="py-3 text-[#364152] hover:bg-[#F8FAFC]"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </header>
    </div>
    
    </>
  )
}

export default Navbar


















// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import i18n from "../../../language/i18n";
// import { useTranslation } from "react-i18next";

// function Navbar({ onMenuClick }) {
//   const [open, setOpen] = useState(false);
//   const { t } = useTranslation();
//   const dropdownRef = useRef(null);

//   // change language 
//   const handleLangChange = (lang) => {
//     i18n.changeLanguage(lang);
//     document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
//     setOpen(false); 
//   };

//   // يقفل القائمة لو ضغطت بره
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <header className="h-20 bg-[#fff] border-b border-[#E3E8EF] flex items-center justify-between px-6 py-4">
//         {/* Left side */}
//         <div className="lg1:block  hidden">
//           <p className="text-[#4B5565] text-lg font-medium">{t("Welcome back!")} </p>
//           <p className="text-[#697586] text-sm font-normal">
//             {t("Lets check your update today")}
//           </p>
//         </div>

//         <div className="lg1:hidden block ">
//           <button onClick={onMenuClick}>
//             <img src="/images/icons/menu.svg" alt="" />
//           </button>
//         </div>

//         {/* Right side */}
//         <div>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-4">
//               {/* Language Dropdown */}
//               <div ref={dropdownRef} className="relative">
//                 <span
//                   className="p-1.5 w-10.5 h-10 border border-[#CDD5DF] rounded-[3px] flex items-center justify-center cursor-pointer"
//                   onClick={() => setOpen(!open)}
//                 >
//                   <img src="images/icons/Language.svg" alt="Language" />
//                 </span>

//                 {open && (
//                   <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-50">
//                     <li
//                       onClick={() => handleLangChange("en")}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       English
//                     </li>
//                     <li
//                       onClick={() => handleLangChange("ar")}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       العربية
//                     </li>
//                   </ul>
//                 )}
//               </div>

//               {/* Notification Icon */}
//               <span className="p-1.5 w-10.5 h-10 border border-[#CDD5DF] rounded-[3px]">
//                 <img src="images/icons/notification.svg" alt="Notifications" />
//               </span>
//             </div>

//             {/* Divider */}
//             <div className="flex items-center ">
//               <hr className="w-[1.2px] h-9 bg-[#D6D6D6] border-0" />
//             </div>

//             {/* User Info */}
//             <div className="flex gap-3">
//               <img
//                 src="/logoiconch.png"
//                 alt="User"
//                 width="50px"
//                 height="50px"
//                 className="rounded-full"
//               />
//               {/* <div className="hidden lg1:block">
//                 <p className="text-[#364152] text-base font-medium mt-0.5">حسام</p>
//                 <p className="text-[#4B5565] text-sm font-normal">المشرف الفائق</p>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar;

