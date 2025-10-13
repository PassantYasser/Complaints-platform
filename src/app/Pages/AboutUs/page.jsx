// import MainLayout from '@/app/Components/MainLayout/MainLayout'
// import React from 'react'

// function AboutUsPage() {
//   return (
//     <>
//     <MainLayout>
// about
//     </MainLayout>
    
  
    
//     </>
//   )
// }

// export default AboutUsPage

"use client";

import MainLayout from "@/app/Components/MainLayout/MainLayout";
import React from "react";

export default function AboutUsPage() {
  return (
    <MainLayout>
  <div className=" flex items-center justify-center h-screen overflow-hidden">
  <div className="w-full   overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
{/* Left Section - Image */}
      <div className="relative flex justify-center">
        <img
          src="/hellllp.jpg"
          alt="About Us"
          className="w-[80%]"
        />
      </div>
      {/* Right Section - Text */}
      {/* <div className="flex flex-col justify-center px-6">
        <p className="text-gray-400 text-xl leading-relaxed font-medium text-right mb-4">
          نحن ملتزمون بتوفير نظام لاداره قسم الشكاوى والاستعلامات ,يبسط على العميل وفى حاجه هتتكتب هنا لسه مش عارف ونعمل خط زى اللى فى الصوره وتحت الخط نكتب
          نركز على الابتكار والدقه والتميز فى تقديم حلول شاكله لقسم الاستعلامات وقسم الشكاوى.
        </p>
      </div> */}
      <div className="flex flex-col justify-center px-6">
        <div className="flex items-start gap-4">
          {/* الخط الجانبي */}
          <div className="w-1 bg-yellow-500 rounded h-full"></div>

          {/* النص */}
          <p className="text-gray-700 text-xl leading-relaxed font-medium text-right">
            نحن ملتزمون بتوفير نظام لإدارة قسم الشكاوى والاستعلامات، يبسط على العميل
            وفى حاجة هتتكتب هنا لسه مش عارف، ونعمل خط زي اللي في الصورة. تحت الخط نركز
            على الابتكار والدقة والتميز في تقديم حلول عملية لقسم الاستعلامات وقسم الشكاوى.
          </p>
        </div>
      </div>

      

    </div>
  </div>
</div>

    </MainLayout>
  );
}

