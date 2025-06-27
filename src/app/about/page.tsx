import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
      {/* Cosmic background image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/cosmic.png" // Make sure this image exists in your public/ directory
          alt="Cosmic background"
          fill
          className="object-cover object-center brightness-110 contrast-125"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Black bar behind navbar */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-black z-0" />
      {/* Content */}
      <div className="relative z-10 pt-40 max-w-6xl mx-auto px-4 pb-24 flex flex-col lg:flex-row items-center lg:items-center gap-20 lg:gap-32">
        {/* Left: Info */}
        <div className="flex-[1.3] flex flex-col justify-center text-left">
          <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">About Me</h1>
          <p className="mb-12 text-gray-200 text-xl max-w-2xl leading-relaxed">
            I&apos;m a student committed to continuous self-development, growth, and meaningful connection. My goal is to become a thoughtful and humble leader—one who values dedication, collaboration, and integrity.<br /><br />
            I&apos;m passionate about applying my diverse skill set to any role I take on, especially in areas such as computer organization, cybersecurity awareness, and the ethical application of artificial intelligence. I believe AI should be used as a tool to enhance productivity and creativity—not to replace human potential.<br /><br />
            Whether it&apos;s through technical challenges or team collaboration, I&apos;m driven by purpose and eager to keep learning, building, and contributing.
          </p>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center px-10 py-4 rounded bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold transition text-lg shadow-md gap-3 w-fit mt-2"
          >
            DOWNLOAD CV
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>
        {/* Right: Circular Image with Gradient Accent */}
        <div className="flex-[1] flex items-center justify-center relative min-w-[260px] -mt-24">
          {/* Gradient accent circle */}
          <div className="absolute top-4 right-4 w-64 h-64 rounded-full z-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500" />
          {/* Profile image */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden z-10 shadow-2xl">
            <Image
              src="/profilepic2.jpeg" // Replace with your image
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutPage; 