// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

const HERO_IMG = "/eng_background.jpg";   // Put in /public
const PROFILE_IMG = "/profilepic2.jpeg"; // Replace or keep as-is

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] bg-white text-gray-900">
      {/* Hero header with background image (flush to top) */}
      <section aria-label="About hero" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-[34vh] min-h-[200px] max-h-[320px] w-full max-w-7xl items-center justify-center px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ABOUT ME
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left: Text */}
          <div className="md:col-span-7 lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Hi, I’m Saul.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              I&apos;m a student committed to continuous self-development, growth, and meaningful
              connection. My goal is to become a thoughtful and humble leader—one who values
              dedication, collaboration, and integrity.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              I&apos;m passionate about applying my diverse skill set to any role I take on,
              especially in areas such as computer organization, cybersecurity awareness,
              and the ethical application of artificial intelligence. I believe AI should be used
              as a tool to enhance productivity and creativity—not to replace human potential.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              Whether it&apos;s through technical challenges or team collaboration, I&apos;m driven
              by purpose and eager to keep learning, building, and contributing.
            </p>

            <div className="mt-8">
              <Link
                href="/Resume.pdf"
                download
                className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="ml-2 h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image area */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
                {/* If you don't have an image yet, you can comment this out and keep the placeholder below */}
                <Image
                  src={PROFILE_IMG}
                  alt="Portrait of Saul Serrano"
                  width={640}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
                {/* Placeholder (uncomment if you want a placeholder instead of an image)
                <div className="aspect-square w-full bg-gradient-to-tr from-indigo-100 via-blue-100 to-white" />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
