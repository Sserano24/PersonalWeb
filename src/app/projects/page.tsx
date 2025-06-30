import ProjectsGrid, { Project } from "../components/ProjectsGrid";
import Image from "next/image";

const projects: Project[] = [
  {
    title: "CrowdX",
    description: "A crowdfunding platform where users can create campagins and collect contributions via cryptocurrency or credit/debit payments. My team and I plan to deploy this project by December 2025.",
    image: "/eth.png", // Replace with your image path or leave blank
    button1Label: "Github",
    button1Href: "https://github.com/Sserano24/CrowdX2-frontend.git"
  },
  {
    title: "Stinger Sprint",
    description: "Built a 2D arcade game in Pygame with real-time input, animation, and collision detection. Worked in a SCRUM-based team, contributing to sprint planning, game mechanics, and UI design. Used Git/GitHub for version control and collaborative development.",
    image: "/frog.png",
    button1Label: "Github",
    button1Href: "https://github.com/NukaCola27/CSC131_Team3.git"
  },
  {
    title: "Operating System Development",
    description: "I developed a custom operating system in C, applying foundational concepts such as process scheduling, context switching, memory managment, and I/O handing.",
    image: "/command-line.jpg",
    button1Label: "Ask A Question",
    button1Href: "/contact",
  },
  {
    title: "Security Operations Center",
    description: "A cloud-based security lab using Wazuh SIEM, The Hive, and Shuffle for automated threat detection and response. Integrated SOC workflows, reduced manual triage time, and documented architecture for applied cybersecurity and cloud concepts.",
    image: "/SOC.png",
    button1Label: "Ask A Question",
    button1Href: "/contact",
  },
  {
    title: "Mobile RC Car",
    description: "Built a Bluetooth-enabled RC vehicle using an STM32 microcontroller and Embedded C. Integrated UART communication to receive commands and modulate PWM signals for DC and servo motor control. Verified signal timing and motor response using a UNIX terminal and Analog Discovery Oscilloscope. Demonstrates skills in firmware development, UART, and real-time motor control.",
    image: "/microcontroller.png", 
    button1Label: "Ask A Question",
    button1Href: "/contact",
  },
  {
    title: "Arithmentic Logic Untit",
    description: "Designed an 8-bit ALU in Cadence using 45nm CMOS, implementing custom layouts for adders, logic gates, and multipliers. Verified DRC/LVS compliance and optimized for performance and physical layout constraints.",
    image: "/ALU.png",
    button1Label: "Ask A Question",
    button1Href: "/contact",
  },
];

const ProjectsPage = () => {
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
      {/* Title */}
      <div className="relative z-10 pt-32 max-w-7xl mx-auto px-4 pb-4">
        <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-white-400 to-indigo-400 bg-clip-text text-transparent text-center">Projects</h1>
      </div>
      {/* The rest of your content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage; 