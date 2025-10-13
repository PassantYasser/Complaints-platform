"use client";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
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


  //


        //Front national ID card photo
        const [file, setFile] = useState(null);
        const [progress, setProgress] = useState(0);
      
        const handleFileChange = (e) => {
          const selectedFile = e.target.files[0];
          if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
      
            let uploaded = 0;
            const interval = setInterval(() => {
              uploaded += 20;
              if (uploaded >= 100) {
                uploaded = 100;
                clearInterval(interval);
              }
              setProgress(uploaded);
            }, 500);
          }
        };
      
        const handleRemove = () => {
          setFile(null);
          setProgress(0);
        };
      
        //Front national ID card photo
        const [taxFile , setTaxFile]= useState(null);
        const[taxProgress , setTaxProgress]= useState(0);
        
        const handleTaxesFileChange = (e)=>{
          const selectTaxFile = e.target.files[0];
          if(selectTaxFile && selectTaxFile.type === "application/pdf" ){
            setTaxFile(selectTaxFile);
            let uploaded=0;
            const interval = setInterval(() => {
              uploaded += 20;
              if (uploaded >= 100) {
                uploaded = 100;
                clearInterval(interval);
              }
              setTaxProgress(uploaded);
            }, 500);
          }
        }
        const handleTaxRemove = () => {
          setTaxFile(null);
          setTaxProgress(0);
        };

        //Upload supporting documents
          const [docFile , setDocFile]= useState(null);
        const[docProgress , setDocProgress]= useState(0);
        
        const handledocFileChange = (e)=>{
          const selectTaxFile = e.target.files[0];
          if(selectTaxFile && selectTaxFile.type === "application/pdf" ){
            setDocFile(selectTaxFile);
            let uploaded=0;
            const interval = setInterval(() => {
              uploaded += 20;
              if (uploaded >= 100) {
                uploaded = 100;
                clearInterval(interval);
              }
              setDocProgress(uploaded);
            }, 500);
          }
        }
        const handleDocRemove = () => {
          setDocFile(null);
          setDocProgress(0);
        };
      
  return (
    
    <MainLayout>
<main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">

        {/* Logo */}
        <div className="flex justify-end mb-4">
          <img src="/loggggggo.png" alt="Logo" className="h-20 w-40  rounded-sm" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-[#343e4d]">{t('Complaint Form')}</h2>

      
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-normal text-[#364152]">{t('Full Name')}</label>
            <input
              type="text"
              placeholder={t('Enter your name')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          {/* National ID */}
          <div>
            <label className="block mb-2 text-sm font-normal text-[#364152]">{t('National ID')}</label>
            <input
              type="text"
              placeholder={t('Enter your national ID')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2 text-sm font-normal text-[#364152]">{t('Phone Number')}</label>
            <input
              type="text"
              placeholder={t('Enter your phone number')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-normal text-[#364152]">{t('Email')}/({t('optional')})</label>
            <input
              type="email"
              placeholder={t('Enter your email')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

          

          {/* Home Address */}
          <div>
            <label className="block mb-1 text-sm font-normal text-[#364152]">{t('Address as it appears on the card')}</label>
            <input
              type="text"
              placeholder={t('Enter your Address as it appears on the card')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
              required
            />
          </div>

        
          {/* Front national ID card photo */}
          <div className="flex flex-col gap-3">
<label className="text-[#364152]">{t("Front national ID card photo")}</label>

{!file ? (
// === Initial state (placeholder upload box) ===
<label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
  <img
    src="/images/icons/upload.svg"
    alt="upload"
    className="w-5 h-5 absolute left-3"
  />
  <span className="flex-1">
    {t("Upload a photo of the front of your national ID card")}
  </span>
  <input
    type="file"
    accept="application/pdf"
    className="hidden"
    onChange={handleFileChange}
  />
</label>
) : progress < 100? (
// === Upload in progress UI ===
<div className="border border-[#C8C8C8] rounded-[3px] p-3">
  <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
      <span className="text-sm text-[#364152] font-medium">
        {file.name}
      </span>
    </div>
    <button onClick={handleRemove} className="text-[#C69815]">
      <img src="/images/icons/cancel-circle.svg" alt="" />
    </button>
  
  </div>

  <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
    <div className='flex gap-2'>
      <p className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</p>
      <img src="/images/icons/loading.svg" alt="" />
      <span>{t("Loading...")}</span>
    </div>
    {/* <span>{progress}%</span> */}
  </div>

  <div className="w-full bg-gray-200 h-1 mt-1 rounded">
    <div
      className="bg-[#C69815] h-1 rounded"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
</div>

) : (

// Final UI after upload complete
<div className="border border-[#C8C8C8] rounded-[3px] p-3 flex items-center justify-between">
    {/* file name + icon */}
  <div className="flex items-center gap-2">
    <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
    <span className="text-sm text-[#656565] font-medium">{file.name}</span>
  </div>
  {/* delete button */}
  <button onClick={handleRemove}>
    <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
  </button>


</div>
)}
          </div>

          {/* back  national ID card photo */}
          <div className="flex flex-col gap-3">
            <label className="text-[#364152]">{t("Back national ID card photo")}</label>

            {!taxFile ? (
              // === Initial state (placeholder upload box) ===
              <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
                <img
                  src="/images/icons/upload.svg"
                  alt="upload"
                  className="w-5 h-5 absolute left-3"
                />
                <span className="flex-1">
                  {t("Upload a photo of the back of your national ID card")}
                </span>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleTaxesFileChange}
                />
              </label>
            ) : taxProgress < 100? (
              // === Upload in progress UI ===
              <div className="border border-[#C8C8C8] rounded-[3px] p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                    <span className="text-sm text-[#364152] font-medium">
                      {taxFile.name}
                    </span>
                  </div>
                  <button onClick={handleTaxRemove} className="text-[#C69815]">
                    <img src="/images/icons/cancel-circle.svg" alt="" />
                  </button>
                
                </div>

                <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
                  <p className='flex gap-2'>
                    <p className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</p>
                    <img src="/images/icons/loading.svg" alt="" />
                    <span>{t("Loading...")}</span>
                  </p>
                  {/* <span>{progress}%</span> */}
                </div>

                <div className="w-full bg-gray-200 h-1 mt-1 rounded">
                  <div
                    className="bg-[#C69815] h-1 rounded"
                    style={{ width: `${taxProgress}%` }}
                  ></div>
                </div>
              </div>

            ) : (

              // Final UI after upload complete
              <div className="border border-[#C8C8C8] rounded-[3px] p-3 flex items-center justify-between">
                  {/* file name + icon */}
                <div className="flex items-center gap-2">
                  <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                  <span className="text-sm text-[#656565] font-medium">{taxFile.name}</span>
                </div>
                {/* delete button */}
                <button onClick={handleTaxRemove}>
                  <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
                </button>

              
              </div>
            )}
          </div>


          {/*Upload supporting documents*/}
          <div className="flex flex-col gap-3">
            <label className="text-[#364152]">{t("Upload supporting documents")}</label>

            {!docFile ? (
              // === Initial state (placeholder upload box) ===
              <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
                <img
                  src="/images/icons/upload.svg"
                  alt="upload"
                  className="w-5 h-5 absolute left-3"
                />
                <span className="flex-1">
                  {t("Upload a photo of the back of your national ID card")}
                </span>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handledocFileChange}
                />
              </label>
            ) : docProgress < 100? (
              // === Upload in progress UI ===
              <div className="border border-[#C8C8C8] rounded-[3px] p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                    <span className="text-sm text-[#364152] font-medium">
                      {docFile.name}
                    </span>
                  </div>
                  <button onClick={handleDocRemove} className="text-[#C69815]">
                    <img src="/images/icons/cancel-circle.svg" alt="" />
                  </button>
                
                </div>

                <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
                  <div className='flex gap-2'>
                    <p className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</p>
                    <img src="/images/icons/loading.svg" alt="" />
                    <span>{t("Loading...")}</span>
                  </div>
                  {/* <span>{progress}%</span> */}
                </div>

                <div className="w-full bg-gray-200 h-1 mt-1 rounded">
                  <div
                    className="bg-[#C69815] h-1 rounded"
                    style={{ width: `${docProgress}%` }}
                  ></div>
                </div>
              </div>

            ) : (

              // Final UI after upload complete
              <div className="border border-[#C8C8C8] rounded-[3px] p-3 flex items-center justify-between">
                  {/* file name + icon */}
                <div className="flex items-center gap-2">
                  <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                  <span className="text-sm text-[#656565] font-medium">{docFile.name}</span>
                </div>
                {/* delete button */}
                <button onClick={handleDocRemove}>
                  <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
                </button>

              
              </div>
            )}
          </div>

  {/* Complaint Details */}
          <div>
            <label className="block mb-2 text-sm font-normal text-[#364152]">{t('Complaint Details')}</label>
            <textarea
              rows="4"
              placeholder={t('Enter complaint details here...')}
              className="w-full border border-[#C8C8C8] rounded-sm p-2 focus:ring-3 focus:ring-yellow-600 focus:border-none outline-none"
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
    </MainLayout>
  );
}

export default ComplaintsPage;
