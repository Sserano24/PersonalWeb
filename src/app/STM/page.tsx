// app/projects/[project]/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  // --- Mock data (replace with real data fetched by slug/params) ---
  const project = {
    title: "ST Micro Car",
    tech: ["Embedded C", "ST Microcontroller", "STM IDE", "Team Lead",],
    heroBg: "/STM4.jpg", 
    images: {
      inlineLeft: "/STM3.png",
      inlineRight: "/STM.jpg",
    },
  };

  const nextProject = {
    slug: "ALU",
    name: "Arithmetic Logic Unit",
    blurb: "An 8 bit ALU developed in 45nm CMOS technology",
    bg: "/ALU3.png",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section aria-label="Project hero" className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.heroBg}')`, backgroundSize: "70%", backgroundPosition: "center 10%",}}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Title */}
        <div className="relative mx-auto flex h-[38vh] min-h-[220px] max-h-[360px] w-full max-w-7xl items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro / At-a-glance — Alt layout
            Requires: import Image from "next/image";
        */}
        <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border shadow-sm">
            {/* Top accent bar */}
            <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-400" />

            <div className="grid gap-10 p-6 md:grid-cols-3 md:p-10">
            {/* Left: narrative + primary image */}
            <div className="md:col-span-2 space-y-6">
                <header>
                <h2 className="text-2xl font-semibold text-gray-900">Project Overview</h2>
                </header>

                <p className="leading-relaxed text-gray-700">
                In this project I led a team to design and
                implement a bluetooth-controlled car powered by an STM32 microprocessor. Using Embedded C, we
                developed software to controll with hardware components including motors, servos, and bluetooth receivers. My role included
                directing collaborative design decisions, coordinating task assignments, and ensuring reliable
                hardware-software integration throughout the project timeline.
                </p>

                <p className="leading-relaxed text-gray-700">
                The system leveraged UART-based serial communication to interpret commands from a mobile device
                and modulated PWM signals to achieve real-time motor actuation. To verify performance and
                reliability, we troubleshot integration challenges using a UNIX terminal and oscilloscope,
                carefully analyzing connectivity, timing, and signal behavior. This experience strengthened my
                expertise in embedded programming, microcontroller communication protocols, and cross-disciplinary
                teamwork in developing functional mechatronic systems.
                </p>





                {/* Primary image */}
                <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gray-100">
                <Image
                src={project.images.inlineLeft ?? "/project-primary.png"}
                alt="Primary project screenshot (replace)"
                fill
                className="object-cover object-center"
                style={{ objectPosition: "center" }}
                />

                </figure>
            </div>

            {/* Right: key skills + optional secondary image */}
            <aside className="space-y-6">
                <div className="rounded-2xl border p-5">
                <h3 className="text-lg font-semibold text-gray-900">Key Skills Used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                    <span
                        key={t}
                        className="rounded-full border px-3 py-1 text-xs text-gray-700"
                    >
                        {t}
                    </span>
                    ))}
                </div>
                </div>

                {/* Secondary image (optional) */}
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-gray-100">
                <Image
                    src={project.images.inlineRight?? "/project-secondary.png"}
                    alt="Secondary project view (replace)"
                    fill
                    className="object-cover"
                />
                </figure>
            </aside>
            </div>
        </div>
        </section>


      {/* Divider + Next Project CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative">
          <hr className="border-t border-gray-200" />
          <div className="mx-auto -mt-4 flex w-full max-w-md items-center justify-center gap-2 rounded-full border bg-white px-5 py-2 text-sm shadow-sm">
            <span className="text-gray-600">Next project:</span>
            <Link
              href= {nextProject.slug}
              className="group inline-flex items-center gap-2 font-medium text-gray-900"
            >
              <span>{nextProject.name}</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>

        {/* Optional preview card under the divider */}
        <Link
          href= {nextProject.slug}
          className="mt-6 block overflow-hidden rounded-2xl border"
        >
          <div
            className="relative h-44 w-full bg-cover bg-center"
            style={{
            backgroundImage: `url('${nextProject.bg ?? "/bgprojects.png"}')`,
            backgroundPosition: "center 35%",
            backgroundSize: "100%", // zoomed out a little
            }}

            aria-label={`Preview for ${nextProject.name}`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-5 text-white">
                <div className="text-xs uppercase tracking-wider text-white/80">
                  Up Next
                </div>
                <div className="text-xl font-semibold">{nextProject.name}</div>
                <div className="text-sm text-white/90">{nextProject.blurb}</div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
