"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function InfoOnePage({ handleNext }) {
  const { t } = useTranslation();

  return (
    <>
      
      <div className="flex flex-col gap-4">

        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            {t("First Name")}
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="text"
            id="firstName"
            placeholder={t("Enter your first name")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            اسم العائلة
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="text"
            id="lastName"
            placeholder={t("Enter your last name")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#364152] fontSizeA font-normal">
            البريد الإلكتروني
          </label>
          <input
            className="w-full h-13 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:outline-none focus:border-[#DDA918]"
            type="text"
            id="email"
            placeholder={t("Enter your email address")}
          />
        </div>

        <div className="flex flex-col col-span-2 lg1:col-span-1">
          <label className="text-[#364152] text-base font-normal mb-3 block">
            {t("Mobile number")}
          </label>
          <div className="relative">
            <PhoneInput
              country={"sa"}
              placeholder={t("Enter your mobile number")}
              containerClass="!w-full"
              inputClass="!w-full !h-[52px] !border !border-[#C8C8C8] !rounded-[3px] !pl-24 !text-left !text-[#364152] placeholder-[#9A9A9A]  "
              buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-0"
              dropdownClass="!text-[#364152] !border "
            />
          </div>
        </div>

      </div>

      {/* btn */}
      <button
        onClick={handleNext}
        className="w-full h-12 bg-[#DDA918] text-white rounded-[3px] mt-2 cursor-pointer"
      >
        التالي
      </button>
    </>
  );
}

export default InfoOnePage;
