import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

function PreviousBtn({onClick,className,path}) {
    const {t}= useTranslation()
  
  return (
    <>
    <Link href={path}>
      <button
        onClick={onClick} 
        className={`
          h-15 
          px-4 py-2.5 
          bg-[#fff] text-[#C69815]
          border border-[#C69815] 
          text-base font-medium
          rounded-[3px] 
          ${className}
        `}
        >
          {t("the previous")}
        </button>
    </Link>
    </>
  )
}

export default PreviousBtn