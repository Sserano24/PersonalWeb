"use client";

import React, { useRef, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const receivedAtRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const email = "shserranogutierrez@csus.edu";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (receivedAtRef.current) {
      receivedAtRef.current.value = new Date().toLocaleString();
    }
    try {
      await emailjs.sendForm(
        "service_69pmkmb",
        "template_32n61eq",
        formRef.current,
        "5MXaFl418tTzSc78p"
      );
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-16">
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px black inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      <div className="w-full max-w-5xl bg-black/80 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Contact Info */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Get in Touch</h2>
            <p className="mb-4 font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">I'd like to hear from you!</p>
            <p className="text-gray-300 mb-8">If you have any questions, collaboration ideas, or simply want to connect, feel free to reach out through my contact form. I'm always open to discussing projects, sharing hobbies, chatting about blog topics, or grabbing a virtual coffee.</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              onClick={handleCopy}
              className="text-gray-400 hover:text-blue-400 cursor-pointer"
              title="Copy email"
            >
              <EnvelopeIcon className="w-[22px] h-[22px]" />
            </a>
            <a href="https://github.com/Sserano24" className="text-gray-400 hover:text-blue-400"><FaGithub size={22} /></a>
            <a href="https://linkedin.com/in/saul-serrano--" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={22} /></a>
            <a href="https://www.instagram.com/saulserrano7310/" className="text-gray-400 hover:text-blue-400"><FaInstagram size={22} /></a>
            {copied && (
              <span className="ml-2 text-blue-400 text-sm transition">Email copied!</span>
            )}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex-1 bg-black p-8 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="firstName" className="text-gray-300 text-sm">First Name</label>
              <input id="firstName" name="firstName" type="text" required className="bg-transparent border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="lastName" className="text-gray-300 text-sm">Last Name</label>
              <input id="lastName" name="lastName" type="text" required className="bg-transparent border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-300 text-sm">Email*</label>
            <input id="email" name="email" type="email" required className="bg-transparent border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition" />
          </div>
          {/* Hidden reply_to field for EmailJS */}
          <input type="hidden" name="reply_to" value={formRef.current?.email?.value || ""} />
          {/* Hidden receivedAt field for EmailJS */}
          <input type="hidden" name="receivedAt" ref={receivedAtRef} />
          {/* New: User Type Select */}
          <div className="flex flex-col gap-1">
            <label htmlFor="userType" className="text-gray-300 text-sm">I am a...</label>
            <select id="userType" name="userType" required className="bg-black border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition">
              <option value="" className="bg-black text-white">Select an option...</option>
              <option value="student" className="bg-black text-white">Student</option>
              <option value="recruiter" className="bg-black text-white">Recruiter</option>
              <option value="other" className="bg-black text-white">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
            <textarea id="message" name="message" rows={4} required className="bg-transparent border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition resize-none" />
          </div>
          <button type="submit" className="self-end mt-2 px-8 py-2 rounded bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition">Send</button>
        </form>
      </div>
    </main>
  );
} 