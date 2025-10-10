"use client";

import Image from "next/image";
import Link from "next/link";

// Timeline data (replace with your real experiences)
const TIMELINE = [
  {
    company: "ACR Glass and Doors",
    role: "Design & Project Mangement Intern",
    start: "June 2019",
    end: "August 2019",
    location: "Oakland, CA",
    imageSrc: "ACR.png",
    imageAlt: "ACR  screenshot",
    summary:
      "Designed inustry compliant 2D schematics and streamlinned project workflows.",
  },
  {
    company: "Costco Wholesale",
    role: "Backup Supervisor & Sales Representative",
    start: "July 2020",
    end: "Present",
    location: "Sacramento, CA",
    imageSrc: "Costco4.png",
    imageAlt: "Costco image",
    summary:
      "Lead teams of 10+ in high volume retail operations, using data analytics to optimize sales and customer satisfaction.",
  },
  {
    company: "California State University, Sacramento",
    role: "BS Computer Engineering",
    start: " August 2020",
    end: "Present",
    location: "Sacramento, CA",
    imageSrc: "School.avif",
    imageAlt: "School Image",
    summary:
      "Enrolled in advanced engineering coursework, building a strong  foundation that enables me to design, implement, and ship real projects.",
    },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-[100dvh] overflow-hidden bg-white text-gray-900">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-6rem] -translate-x-1/2 blur-3xl">
          <div className="h-64 w-[72rem] bg-gradient-to-br from-grey-100 via-black-50 to-transparent opacity-70" />
        </div>
        <div className="absolute bottom-[-8rem] right-[-8rem] blur-3xl">
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-black-grey to-black-50 opacity-70" />
        </div>
      </div>

      {/* Hero */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-gray-900 text-gray-100">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-12">
          {/* Text */}
          <div className="md:col-span-7 lg:col-span-7">
            <span className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold tracking-widest text-gray-300 ring-1 ring-inset ring-gray-700">
              COMPUTER ENGINEERING PORTFOLIO
            </span>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              Saul Serrano
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Actively Exploring 2026 Full‑Time Roles
            </p>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-2xl ring-1 ring-gray-700 shadow-lg">
                {/* If fill causes layout issues in your env, switch to explicit width/height */}
                <Image
                  src="/SaulHeadshot.jpeg"
                  alt="Portrait of Saul Serrano"
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 420px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 lg:pb-20">
        <h2 className="mt-16 text-center text-5xl font-semibold tracking-tight text-gray-800 sm:text-4xl">Summary</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          Thanks for visiting my portfolio! I’m a Computer Engineering senior at Sacramento State, passionate about embedded systems, robotics, and AI/ML. I welcome your questions, feedback, and opportunities to connect.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 sm:pb-28">
        <h2 className="mb-10 text-center text-5xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
          Experience
        </h2>

        <div className="relative grid grid-cols-1 gap-y-16 lg:grid-cols-2">
          {/* Vertical spine for large screens */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-blue-100 lg:block" />

          {TIMELINE.slice(0, 3).map((item, idx) => {
            const isLeft = idx % 2 === 0; // left, right, left...
            return (
              <div
                key={idx}
                className="relative lg:col-span-2"
                style={{ gridRowStart: idx + 1 }}
              >
                {/* Dot centered on the global spine */}
                <div className="pointer-events-none absolute left-1/2 top-1 z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 shadow-sm lg:flex">
                  <span className="text-[10px] font-extrabold">
                    {item.company.substring(0, 1)}
                  </span>
                </div>

                {/* Row content: two halves */}
                <div className="items-start lg:grid lg:grid-cols-2 lg:gap-10">
                  {/* Mobile date above card */}
                  <div className="mb-2 text-blue-700 lg:hidden">
                    <div className="text-sm font-semibold">
                      {item.start} {item.end ? `- ${item.end}` : ""}
                    </div>
                    {item.location && (
                      <div className="text-xs text-gray-500">{item.location}</div>
                    )}
                  </div>

                  {/* LEFT HALF */}
                  <div>
                    {/* Date on LEFT when the CARD is on the RIGHT */}
                    {!isLeft && (
                      <div className="hidden lg:block text-right pr-10 text-blue-700">
                        <div className="text-base font-semibold">
                          {item.start} {item.end ? `- ${item.end}` : ""}
                        </div>
                        {item.location && (
                          <div className="text-sm text-gray-500">{item.location}</div>
                        )}
                      </div>
                    )}

                    {/* CARD on the LEFT when isLeft */}
                    {isLeft && (
                      <div className="group relative w-full rounded-xl border border-blue-200 bg-gray-100 p-4 shadow-md transition hover:shadow-lg">
                        <h3 className="text-lg font-bold text-blue-700">
                          <span className="block">{item.company}</span>
                          <span className="block font-semibold text-gray-900">
                            {item.role}
                          </span>
                        </h3>

                        {item.imageSrc && (
                          <div className="mt-3 overflow-hidden rounded-md ring-1 ring-gray-200">
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt || "Timeline image"}
                              width={960}
                              height={540}
                              className="h-auto w-full object-cover"
                              unoptimized
                            />
                          </div>
                        )}

                        {item.summary && (
                          <p className="mt-2 text-sm text-gray-700">{item.summary}</p>
                        )}

                      </div>
                    )}
                  </div>

                  {/* RIGHT HALF */}
                  <div>
                    {/* Date on RIGHT when the CARD is on the LEFT */}
                    {isLeft && (
                      <div className="hidden lg:block text-left pl-10 text-blue-700">
                        <div className="text-base font-semibold">
                          {item.start} {item.end ? `- ${item.end}` : ""}
                        </div>
                        {item.location && (
                          <div className="text-sm text-gray-500">{item.location}</div>
                        )}
                      </div>
                    )}

                    {/* CARD on the RIGHT when !isLeft */}
                    {!isLeft && (
                      <div className="group relative mt-4 w-full rounded-xl border border-blue-200 bg-gray-100 p-4 shadow-md transition hover:shadow-lg lg:mt-0">
                        <h3 className="text-lg font-bold text-blue-700">
                          <span className="block">{item.company}</span>
                          <span className="block font-semibold text-gray-900">
                            {item.role}
                          </span>
                        </h3>

                        {item.imageSrc && (
                          <div className="mt-3 overflow-hidden rounded-md ring-1 ring-gray-200">
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt || "Timeline image"}
                              width={960}
                              height={540}
                              className="h-auto w-full object-cover [image-orientation:from-image]"
                              unoptimized
                            />
                          </div>
                        )}

                        {item.summary && (
                          <p className="mt-2 text-sm text-gray-700">{item.summary}</p>
                        )}

                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          
        </div>
        {/* Large Explore Projects button below the last card */}
          <div className="col-span-2 flex justify-center mt-16">
            <Link
              href="/projects"
              className="rounded-2xl bg-blue-950 px-12 py-5 text-xl font-bold text-white shadow-lg transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
            >
              Explore Projects
            </Link>
          </div>

      </section>

    </main>
  );
}
