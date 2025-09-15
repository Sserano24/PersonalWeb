// app/resume/page.tsx
import Link from "next/link";

const RESUME_URL = "/Resume.pdf";       // Put Resume.pdf in /public
const HERO_IMG   = "/Screenshot 2025-09-15 103242.png";  // Put circuit_nav.jpg in /public

export default function ResumePage() {
  return (
    <main className="min-h-[100dvh] bg-white text-gray-900">
      {/* HERO with background image */}
      <section aria-label="Resume hero" className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Title */}
        <div className="relative mx-auto flex h-[38vh] min-h-[220px] max-h-[360px] w-full max-w-7xl items-center justify-center px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            RESUME
          </h1>
        </div>
      </section>

      {/* Actions + PDF viewer */}
      <section className="mx-auto w-full max-w-6xl px-6">
        {/* Download button */}
        <div className="mt-6 flex justify-center">
          <a
            href={RESUME_URL}
            download
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            aria-label="Download Résumé PDF"
          >
            Download Resume PDF
          </a>
        </div>

        {/* Embedded PDF */}
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <iframe
            title="Résumé PDF"
            src={`${RESUME_URL}#view=FitH&toolbar=0`}
            className="h-[calc(100vh-12rem)] w-full"
          />
        </div>

        {/* Fallback link */}
        <p className="mt-3 text-center text-sm text-gray-600">
          If the PDF doesn’t display,{" "}
          <Link href={RESUME_URL} target="_blank" className="text-blue-700 underline">
            open it in a new tab
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
