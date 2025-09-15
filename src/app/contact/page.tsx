"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const HERO_IMG = "/circuit_nav.webp";     // make sure this exists in /public
const SIDE_IMG = "/profilepic2.jpeg";    // replace with any image you want shown on the side

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
    } catch {
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-[100dvh] bg-white text-gray-900">
      {/* Hero header with background image (flush to top) */}
      <section aria-label="Contact hero" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-[34vh] min-h-[200px] max-h-[320px] w-full max-w-7xl items-center justify-center px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-7 lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="mt-2 text-sm text-gray-600">
              I&apos;d love to hear from you. Send a message and I&apos;ll get back to you.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="text-gray-700 text-sm">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="X Æ A-Xii"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-gray-700 text-sm">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Musk"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="email" className="text-gray-700 text-sm">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="you@example.com"
              />
            </div>

            {/* Hidden reply_to for EmailJS (optional) */}
            <input type="hidden" name="reply_to" value={formRef.current?.email?.value || ""} />
            {/* Hidden receivedAt field for EmailJS */}
            <input type="hidden" name="receivedAt" ref={receivedAtRef} />

            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="message" className="text-gray-700 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder="Write your message here…"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center rounded-xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
            >
              Send Message
            </button>
          </form>

          {/* Right: Image + Socials / Copy Email */}
          <div className="md:col-span-5 lg:col-span-5">
            
            {/* Info + Socials */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">Connect</h3>
              <p className="mt-1 text-sm text-gray-600">
                For collaborations, opportunities, or questions—reach out anytime.
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-gray-500 hover:text-blue-700"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  <EnvelopeIcon className="h-[22px] w-[22px]" />
                </button>

                <a
                  href="https://github.com/Sserano24"
                  className="text-gray-500 hover:text-blue-700"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/saul-serrano--"
                  className="text-gray-500 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://www.instagram.com/saulserrano7310/"
                  className="text-gray-500 hover:text-blue-700"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>

                {copied && (
                  <span className="ml-2 text-blue-700 text-sm transition">Email copied!</span>
                )}
              </div>

              <div className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${email}`} className="text-blue-700 underline">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
