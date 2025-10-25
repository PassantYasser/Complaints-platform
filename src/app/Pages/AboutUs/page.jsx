// "use client";

// import MainLayout from "@/app/Components/MainLayout/MainLayout";
// import React from "react";

// export default function AboutUsPage() {
//   return (
//     <MainLayout>
//       <div className=" flex items-center justify-center  overflow-hidden">
//         <div className="w-full   overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2 ">
//             {/* Left Section - Image */}
//             <div className="relative flex justify-center mt-5">
//               <img
//                 src="/hellllp.jpg"
//                 alt="About Us"
//                 className="w-[80%]"
//               />
//             </div>
//             {/* Right Section - Text */}
//             <div className="flex flex-col justify-center px-6">
//               <div className="flex items-start gap-4">
//                 {/* الخط الجانبي */}
//                 <div className="w-1 bg-yellow-500 rounded h-full"></div>

//                 {/* النص */}
//                 <p className="text-gray-700 text-xl leading-relaxed font-medium text-right">
//                   نحن ملتزمون بتوفير نظام لإدارة قسم الشكاوى والاستعلامات، يبسط على العميل
//                   وفى حاجة هتتكتب هنا لسه مش عارف، ونعمل خط زي اللي في الصورة. تحت الخط نركز
//                   على الابتكار والدقة والتميز في تقديم حلول عملية لقسم الاستعلامات وقسم الشكاوى.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//     </MainLayout>
//   );
// }  

"use client";

import MainLayout from "@/app/Components/MainLayout/MainLayout";
import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center overflow-hidden mt-6">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Section - Image */}
            <motion.div
              className="relative flex justify-center mt-5"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/hellllp.jpg"
                alt="About Us"
                className="w-[80%]"
              />
            </motion.div>

            {/* Right Section - Text */}
            <motion.div
              className="flex flex-col justify-center px-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                {/* الخط الجانبي */}
                <motion.div
                  className="w-1 bg-yellow-500 rounded h-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: "top" }}
                ></motion.div>

                {/* النص */}
                <p className="text-gray-700 text-xl leading-relaxed font-medium text-right">
                  نحن ملتزمون بتوفير نظام لإدارة قسم الشكاوى والاستعلامات، يبسط على العميل
                  وفى حاجة هتتكتب هنا لسه مش عارف، ونعمل خط زي اللي في الصورة. تحت الخط نركز
                  على الابتكار والدقة والتميز في تقديم حلول عملية لقسم الاستعلامات وقسم الشكاوى.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}


