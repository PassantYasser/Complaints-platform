// "use client"
// import MainLayout from '@/app/Components/MainLayout/MainLayout'
// import Link from 'next/link'
// import React from 'react'
// import { useTranslation } from 'react-i18next'

// function ComplaintsbtnPage() {
//     const {t}= useTranslation()
  
//   return (
//     <>
//       <MainLayout>
//     <div className='  '>
//         <div className='lg1:flex   '>
//           <section className='lg1:hidden   w-full   mt-20'>
//             <div className=' flex justify-center'>
//             <img src="/complaintss.webp" alt="" className=' ' />
//             </div>
//           </section>
      
//           <section className='w-full p-8 flex flex-col  justify-center items-center text-center lg1:items-start  '>
//             <p className='text-gray-600 text-4xl font-semibold'>
//               {t('Welcome to the Complaints and Inquiries Department')}
//             </p>
      
//             <p className='text-gray-600 text-lg font-medium mt-3'>
//               {t('Providing a management system for the inquiries and complaints department')}
//             </p>
            
      
//             <div className='flex justify-center lg1:justify-start  gap-4 mt-8'>
//               <Link href='/Pages/Complaints' className='bg-[#DDA918] text-white font-semibold rounded-[4px]  px-8 py-4'>
//                 {t('Complaints')}
//               </Link>
      
//               <Link href='/Pages/FollowUp' className='border border-[#DDA918] text-[#DDA918] font-semibold rounded-[4px]  px-8 py-4'>
//                 {t('Follow-up complaints')}
//               </Link>
//             </div>
//           </section>
      
      
//           <section className='lg1:block hidden w-full   mt-20'>
//             <div className=' flex justify-center'>
//             <img src="/complaintss.webp" alt="" className='w-200 h-100  ' />
//             </div>
//           </section>
          
        
//         </div>
//     </div>
//     </MainLayout>

//     </>
//   )
// }

// export default ComplaintsbtnPage

"use client";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function ComplaintsbtnPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <motion.div
        className="lg1:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left image (mobile) */}
        <motion.section
          className="lg1:hidden w-full mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <img src="/complaintss.webp" alt="" />
          </div>
        </motion.section>

        {/* Text & buttons section */}
        <motion.section
          className="w-full p-8 flex flex-col justify-center items-center text-center lg1:items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.p
            className="text-gray-600 text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t("Welcome to the Complaints and Inquiries Department")}
          </motion.p>

          <motion.p
            className="text-gray-600 text-lg font-medium mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t("Providing a management system for the inquiries and complaints department")}
          </motion.p>

          <motion.div
            className="flex justify-center lg1:justify-start gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Pages/Complaints"
                className="bg-[#DDA918] text-white font-semibold rounded-[4px] px-8 py-4 transition-all duration-300 hover:bg-[#c79b10]"
              >
                {t("Complaints")}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Pages/FollowUp"
                className="border border-[#DDA918] text-[#DDA918] font-semibold rounded-[4px] px-8 py-4 hover:bg-[#f8f5ed] transition-all duration-300"
              >
                {t("Follow-up complaints")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Right image (desktop) */}
        <motion.section
          className="lg1:block hidden w-full mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="flex justify-center">
            <img src="/complaintss.webp" alt="" className="w-200 h-100" />
          </div>
        </motion.section>
      </motion.div>
    </MainLayout>
  );
}

export default ComplaintsbtnPage;
