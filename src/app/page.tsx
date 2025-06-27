import Image from "next/image";
import { app } from '@/lib/firebase';


export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-8 py-24 text-white overflow-hidden">
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
        <div className="absolute inset-0 " />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center">Hello, I'm Saul Serrano.</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6 text-center">Aspiring Computer Engineer</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl text-center">
      I bridge the gap between code and circuitry—blending web development, embedded systems, and cybersecurity to create solutions that live both online and on the edge. From building hardware that reacts in real time to deploying secure applications in the cloud, I thrive in turning complex ideas into working systems.

Always learning. Always creating. Always ready for the next challenge.
      </p>
      <a
        href="/projects"
        className="px-14 py-5 rounded-lg bg-black/60 text-transparent bg-clip-text
        bg-gradient-to-r from-white to-blue-700
        font-bold text-2xl border border-white/90 hover:bg-white/10 transition mt-10"
      >
        Projects
      </a>
    </main>
  );
}
