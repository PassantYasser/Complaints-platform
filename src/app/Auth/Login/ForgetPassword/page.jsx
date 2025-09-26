"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function ForgetPasswordpage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8  ">
        <section className="w-full">
          <div className="lg1:mt-40.5 mt-25 flex flex-col items-center">
            <p className="mb-6 text-[#C69815] text-2xl font-semibold">
              {t("Forgot your password?")}
            </p>
            <p className="text-[#656565] text-lg font-normal max-w-[500px] text-center">
              {t(
                "Enter the phone number or email address of the account for which you want to change the password."
              )}
            </p>
            <img className="my-17.5" src="/images/lockLogIcon.svg" alt="" />
          </div>

          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
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
            <Link
              href="../Login/VerifyNumber"
              className="w-full h-14 bg-[#DDA918] text-white text-base font-medium rounded-[3px] mt-8 mb-12 flex justify-center items-center "
            >
              {t("send")}
            </Link>
            <p className="flex justify-center gap-1.5">
              <span className="text-[#697586] text-lg font-normal">
                {t("Dont have an account?")}
              </span>
              <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
                {t("Create an account")}
              </Link>
            </p>
          </form>
        </section>

        <section className="w-full hidden lg1:block rounded-[10px]"
          style={{
            background:
              "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)",
          }}
        >
          <p className="flex justify-end ml-4">
            <img src="/images/AuthLogUP.png" alt="" className='w-29 h-49' />
          </p>

          <div className="mt-4.5 w-[70%] mx-auto flex flex-col gap-4 text-center text-white ">
            <p className="text-3xl font-bold">
              {t("Join the ZETIME Partner Network")}
            </p>
            <p className="text-lg font-normal leading-9">
              {t(
                "Register now and get the tools you need to reach a wider customer base and achieve your goals efficiently."
              )}
            </p>
            <p className="mt-20">
              <img src="/images/AuthLogMiddle.svg" alt="" />
            </p>
          </div>

          <p className="  ">
            <img src="/images/AuthLogDown.svg" alt="" className='w-29 h-49' />
          </p>
        </section>
      </div>
    </>
  );
}

export default ForgetPasswordpage;
