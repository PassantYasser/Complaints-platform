"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function InfoTwoPage({ handlePrev }) {
  const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordd, setShowPasswordd] = useState(false);

  
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            الرقم القومي
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="text"
            id="nationalId"
            placeholder={t("Enter your national ID")}
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            كلمة المرور
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="password"
            id="password"
            placeholder={t("Enter your password")}
          />
        </div> */}
        <div className="flex flex-col gap-3">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="password"
              >
                {t("password")}
              </label>

              <div className="relative">
                <input
                  className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder={t("password")}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ?
                    (
                      <img src="/images/icons/eyeClose.svg" alt="" />
                    )
                    :(
                      <img src="/images/icons/eyeOpen.svg" alt="" />
                    )
                  }
                </span>
              </div>

            </div>


        <div className="flex flex-col gap-3">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="password"
              >
                {t("Confirm password")}
              </label>

              <div className="relative">
                <input
                  className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                  type={showPasswordd ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder={t("Confirm password")}
                />
                <span
                  onClick={() => setShowPasswordd(!showPasswordd)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPasswordd ?
                    (
                      <img src="/images/icons/eyeClose.svg" alt="" />
                    )
                    :(
                      <img src="/images/icons/eyeOpen.svg" alt="" />
                    )
                  }
                </span>
              </div>

            </div>

      </div>

      {/* //btns */}
      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          type="button"
          className="w-full h-12 bg-gray-400 text-white rounded-[3px]"
        >
          رجوع
        </button>

        <Link href='/'
          type="submit"
          className="w-full h-12 bg-[#DDA918] text-white rounded-[3px] flex justify-center items-center"
        >
          تسجيل
        </Link>
      </div>
    </>
  );
}

export default InfoTwoPage;
