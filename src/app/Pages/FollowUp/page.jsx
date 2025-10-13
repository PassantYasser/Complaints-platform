"use client"
import React, { useState } from 'react'

function FollowUpPage() {
    const [active, setActive] = useState("followup");
    const complaints = [
  { id: "12345", status: "قيد المراجعة", date: "2025-09-20" },
  { id: "67890", status: "تم الحل", date: "2025-09-18" },
  { id: "11223", status: "مرفوضة", date: "2025-09-15" },
];

  return (
    <>
      <div className="flex h-screen bg-[#fdfbf5]">
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
          متابعة الشكاوي
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="py-3 px-4 text-right">رقم الشكوى</th>
                <th className="py-3 px-4 text-right">الحالة</th>
                <th className="py-3 px-4 text-right">تاريخ التقديم</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr
                  key={complaint.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-[#fdfbf5]" : "bg-white"
                  }`}
                >
                  <td className="py-2 px-4">{complaint.id}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      complaint.status === "تم الحل"
                        ? "text-green-600"
                        : complaint.status === "مرفوضة"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {complaint.status}
                  </td>
                  <td className="py-2 px-4">{complaint.date}</td>
  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


    </>
  )
}

export default FollowUpPage