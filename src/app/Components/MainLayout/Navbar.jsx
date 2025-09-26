"use client";
import React, { useState, useRef, useEffect } from "react";
import i18n from "../../../language/i18n";
import { useTranslation } from "react-i18next";

function Navbar({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  // change language 
  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    setOpen(false); 
  };

  // يقفل القائمة لو ضغطت بره
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="h-20 bg-[#fff] border-b border-[#E3E8EF] flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="lg1:block  hidden">
          <p className="text-[#4B5565] text-lg font-medium">{t("Welcome back!")} </p>
          <p className="text-[#697586] text-sm font-normal">
            {t("Lets check your update today")}
          </p>
        </div>

        <div className="lg1:hidden block ">
          <button onClick={onMenuClick}>
            <img src="/images/icons/menu.svg" alt="" />
          </button>
        </div>

        {/* Right side */}
        <div>
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              {/* Language Dropdown */}
              <div ref={dropdownRef} className="relative">
                <span
                  className="p-1.5 w-10.5 h-10 border border-[#CDD5DF] rounded-[3px] flex items-center justify-center cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <img src="images/icons/Language.svg" alt="Language" />
                </span>

                {open && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-50">
                    <li
                      onClick={() => handleLangChange("en")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      English
                    </li>
                    <li
                      onClick={() => handleLangChange("ar")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      العربية
                    </li>
                  </ul>
                )}
              </div>

              {/* Notification Icon */}
              <span className="p-1.5 w-10.5 h-10 border border-[#CDD5DF] rounded-[3px]">
                <img src="images/icons/notification.svg" alt="Notifications" />
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center ">
              <hr className="w-[1.2px] h-9 bg-[#D6D6D6] border-0" />
            </div>

            {/* User Info */}
            <div className="flex gap-3">
              <img
                src="/images/Male02.svg"
                alt="User"
                width="50px"
                height="50px"
                className="rounded-full"
              />
              <div className="hidden lg1:block">
                <p className="text-[#364152] text-base font-medium mt-0.5">حسام</p>
                <p className="text-[#4B5565] text-sm font-normal">المشرف الفائق</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
