// import MainLayout from '@/app/Components/MainLayout/MainLayout'
// import React from 'react'

// function ContactPage() {
//   return (
//     <MainLayout>
// ContactPage
//     </MainLayout>
//   )
// }

// export default ContactPage

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
      <div className=" flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full  bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Right - Form */}
          <div className="p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-700 text-sm">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
                    placeholder="Your name"
                  />
                </label>
      
                <label className="block">
                  <span className="text-gray-700 text-sm">Email</span>
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
                <span className="text-gray-700 text-sm">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
                  placeholder="Subject"
                />
              </label>
      
              <label className="block">
                <span className="text-gray-700 text-sm">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent p-2"
                  placeholder="Tell us about your project or question"
                />
              </label>
      
              {/* Honeypot for simple spam protection */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      
              {error && <p className="text-sm text-red-600">{error}</p>}
              {success && <p className="text-sm text-green-600">{success}</p>}
      
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-white font-medium disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
      
                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-gray-700"
                >
                  Reset
                </button>
              </div>
            </form>
      
            <p className="mt-6 text-xs text-gray-400">This form sends data to <code className="bg-gray-100 px-2 py-1 rounded">/api/contact</code>. Implement that API to receive emails or store messages.</p>
          </div>
          {/* Left - Info */}
          <div className="p-8 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <p className="text-sm opacity-90">Have a question or want to work together? Fill the form and we'll reply shortly.</p>
      
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs opacity-90">Email</p>
                <p className="font-medium">support@example.com</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Phone</p>
                <p className="font-medium">+20 100 000 0000</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Address</p>
                <p className="font-medium">Cairo, Egypt</p>
              </div>
            </div>
      
            <div className="mt-auto text-xs opacity-90">
              <p>Office hours: Sun - Thu, 9:00 — 17:00</p>
            </div>
          </div>
      
        
        </div>
      </div>
    </MainLayout>
  );
}

