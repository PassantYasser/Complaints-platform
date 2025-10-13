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
      <div className=" bg-gray-50 flex items-center justify-center p-6">
        <div className=" w-full bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section - Image */}
            <div className="relative">
              <img
                src="/test.jpg"
                alt="About Us"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
      
            {/* Right Section - Text */}
            <div className="p-10 flex flex-col justify-center">
              {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-4 border-yellow-400 inline-block pb-1">
                About Us
              </h2> */}
      
              <p className="text-gray-600 leading-relaxed mb-4">
              نحن ملتزمون بتوفير نظام لاداره قسم الشكاوى والاستعلامات ,يبسط على العميل وفى حاجه هتتكتب هنا لسه مش عارف ونعمل خط زى اللى فى الصوره وتحت الخط نكتب
              نركز على الابتكار والدقه والتميز فى تقديم حلول شاكله لقسم الاستعلامات وقسم الشكاوى    
              </p>
      
              {/* <p className="text-gray-600 leading-relaxed mb-4">
                Since our founding, we’ve focused on crafting user-centered designs,
                scalable systems, and intuitive digital experiences that leave a
                lasting impact. Our commitment to transparency, quality, and
                continuous improvement defines everything we do.
              </p>
      
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking for a trusted partner to develop your next web
                application or seeking expert consultation on digital transformation —
                we’re here to help turn your ideas into reality.
              </p> */}
      
              {/* <div className="mt-6">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

