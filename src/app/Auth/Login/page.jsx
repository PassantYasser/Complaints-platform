"use client";
import React, { useState } from "react";
import i18n from "../../../language/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import SecondSection from "@/app/Components/Login/SecondSection";
function LoginPage() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className=" lg1:flex justify-between gap-8  ">
        <section className="w-full px-8">

          {/* 📱Tablet screen only */}
        {/* <div className="lg1:hidden flex justify-center gap-1 my-20">
            <img src="/images/LogoText.svg" alt="" />
            <img src="/images/Logo.svg" alt="" />
          </div> */}

          {/* title  */}
          <div className=" lg1:mt-10  lg1:mb-15 lg1:items-center mb-17.5  flex flex-col   rounded-[10px]">
            <p className="text-[#9E7A11] text-[32px] font-semibold mb-2">
              {t("Welcome back!")}
            </p>
            <p className="text-[#656565] text-2xl font-normal">
              {t("Log in to access your account.")}{" "}
            </p>
          </div>

          <form className="w-full flex flex-col gap-3">

            {/* email form */}
            <div className="flex flex-col gap-3">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="email"
              >
                {t("Email")}/{t("phone number")}
              </label>
              <input
                className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="email"
                name="email"
                id="email"
                placeholder={t("Email")}
              />
            </div>

            {/* password form */}
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

              {/* btn of forget password */}
              <Link
                href="/Auth/Login/ForgetPassword"
                className="flex justify-end text-[#9E7A11] fontSizeA font-normal"
              >
                {t("Forgot your password?")}
              </Link>

            </div>

            <button className="w-full h-14 bg-[#DDA918] text-white text-base font-medium rounded-[3px] mt-4 mb-12">
              {t("Log in")}
            </button>
            
            {/*btn to open signup */}
            <p className="flex justify-center gap-1.5">
              <span className="text-[#697586] text-lg font-normal">
                {t("Dont have an account?")}
              </span>
              <Link href='/Auth/Signup/Company' className="text-[#9E7A11] text-lg font-medium">
                {t("Create an account")}
              </Link>
            </p>

          </form>
          
        </section>

        {/* 💻 desktop screen only */}
      <SecondSection/>


      </div>
    </>
  );
}

export default LoginPage;
