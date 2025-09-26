"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ComplaintsPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false); // state لظهور رسالة النجاح

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تضيفي ارسال البيانات للـ API لو عندك
    setSubmitted(true); // تظهر الرسالة
    // إعادة تعيين الفورم لو تحبي:
    e.target.reset();
  };

  const governorates = [
    t('Cairo'),
    t('Giza'),
    t('Alexandria'),
    t('Luxor'),
    t('Aswan'),
    t('other'),
  ];

  const [selected, setSelected] = useState(t('Select your governorate'));
  const [open, setOpen] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">

        {/* Logo */}
        <div className="flex justify-end mb-4">
          <img src="/logomo.jpeg" alt="Logo" className="h-20 w-40  rounded-sm" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">{t('Complaint Form')}</h2>

      
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-normal">{t('Full Name')}</label>
            <input
              type="text"
              placeholder={t('Enter your name')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          {/* National ID */}
          <div>
            <label className="block mb-2 text-sm font-normal">{t('National ID')}</label>
            <input
              type="text"
              placeholder={t('Enter your national ID')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2 text-sm font-normal">{t('Phone Number')}</label>
            <input
              type="text"
              placeholder={t('Enter your phone number')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-normal">{t('Email')}/({t('optional')})</label>
            <input
              type="email"
              placeholder={t('Enter your email')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          

          {/* Home Address */}
          <div>
            <label className="block mb-1 text-sm font-normal">{t('Address as it appears on the card')}</label>
            <input
              type="text"
              placeholder={t('Enter your Address as it appears on the card')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          {/* Complaint Details */}
          <div>
            <label className="block mb-2 text-sm font-normal">{t('Complaint Details')}</label>
            <textarea
              rows="4"
              placeholder={t('Enter complaint details here...')}
              className="w-full border rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-semibold bg-yellow-600 text-white py-3 rounded-sm hover:bg-yellow-700 transition cursor-pointer"
          >
            {t('Submit Complaint')}
          </button>
  {/* Success Message */}
        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
            {t('Your complaint has been submitted successfully!')}
          </div>
        )}

        </form>
      </div>
    </main>
  );
}

export default ComplaintsPage;
