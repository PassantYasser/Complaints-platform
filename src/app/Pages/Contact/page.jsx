

"use client";

import MainLayout from "@/app/Components/MainLayout/MainLayout";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim() || form.message.length < 10) return "Message must be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      // Example: POST to /api/contact (you need to implement this API route)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setSuccess("Your message was sent. We will contact you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
    <div className="    py-20   px-5">
  <div className="w-full  mt-5 lg:mt-1  bg-gray-50 rounded-[3px] shadow-md overflow-hidden" dir="rtl">
    {/* النموذج */}
    <div className="p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700 text-sm">الاسم</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
              placeholder="اكتب اسمك"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 text-sm">البريد الإلكتروني</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-700 text-sm">الموضوع</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
            placeholder="الموضوع"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 text-sm">الرسالة</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
            placeholder="أخبرنا عن مشروعك أو سؤالك"
          />
        </label>

        <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-lg bg-yellow-500  px-4 py-2 text-white font-medium disabled:opacity-60"
          >
            {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
          </button>

          <button
            type="button"
            onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-gray-700"
          >
            إعادة تعيين
          </button>
        </div>
      </form>

    
    </div>
  </div>
</div>

    </MainLayout>
  );
}

