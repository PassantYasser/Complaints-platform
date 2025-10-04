"use client";
import React from "react";
import { useTranslation } from "react-i18next";

function InfoTwoPage({ handlePrev }) {
  const { t } = useTranslation();
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

        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            كلمة المرور
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="password"
            id="password"
            placeholder={t("Enter your password")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            تأكيد كلمة المرور
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="password"
            id="confirmPassword"
            placeholder={t("Re-enter your password")}
          />
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

        <button
          type="submit"
          className="w-full h-12 bg-[#DDA918] text-white rounded-[3px]"
        >
          تسجيل
        </button>
      </div>
    </>
  );
}

export default InfoTwoPage;
