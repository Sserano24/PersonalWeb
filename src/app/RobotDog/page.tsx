// app/projects/[project]/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  // --- Mock data (replace with real data fetched by slug/params) ---
  const project = {
    title: "Robot Dog",
    tech: ["Python", "RaspberryPi", "Artificial Intelligence", "Git",],
    heroBg: "/pidog.jpg", 
    images: {
      inlineLeft: "/pidog2.webp",
      inlineRight: "/pidog3.jpeg",
    },
  };

  const nextProject = {
    slug: "/AIAgent",
    name: "AI Email Assistant",
    blurb: "Personal AI assistant incharge of emails.",
    bg: "/EmailAI.png",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section aria-label="Project hero" className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.heroBg}')`, backgroundSize: "65%", backgroundPosition: "center 10%",}}
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
                For my robotics capstone project, I am leading a team to build and program a
                robotic dog powered by a Raspberry Pi. The platform integrates motor drivers,
                sensors, and servo controllers to enable precise movement and responsive
                control. Our goal is to autotomate movement with the use of Artificial Intelligence
                </p>

                <p className="leading-relaxed text-gray-700">
                The project incorporates computer vision and AI, allowing the robot to perceive
                its environment and adapt its behavior in real time. We developed modular
                control software to handle gait sequencing, servo coordination, and continuous
                sensor data processing, enabling the robot to move autonomously based on the
                world it sees. This foundation not only supports experimentation with advanced
                AI-driven robotics but also prepares the system for our planned participation
                in an autonomous robot dog competition at the end of 2025.
                </p>



                {/* Primary image */}
                <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gray-100">
                <Image
                src={project.images.inlineLeft ?? "/project-primary.png"}
                alt="Primary project screenshot (replace)"
                fill
                className="object-cover scale-100 object-[center_90%]"
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
          href={nextProject.slug}
          className="mt-6 block overflow-hidden rounded-2xl border"
        >
          <div
            className="relative h-44 w-full bg-cover bg-center"
            style={{
            backgroundImage: `url('${nextProject.bg ?? "/bgprojects.png"}')`,
            backgroundPosition: "center 18%",
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
