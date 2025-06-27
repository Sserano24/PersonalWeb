import ProjectsGrid, { Project } from "../components/ProjectsGrid";
import Image from "next/image";

const projects: Project[] = [
  {
    title: "CrowdX",
    description: "A crowdfunding platform where users can create campagins and collect contributions via cryptocurrency or credit/debit payments",
    image: "/eth.png", // Replace with your image path or leave blank
    button1Label: "Link",
    button1Href: "https://google.com",
    button2Label: "Github",
    button2Href: "https://github.com/Sserano24/CrowdX2-frontend.git"
  },
  {
    title: "Stinger Sprint",
    description: "Built a 2D arcade game in Pygame with real-time input, animation, and collision detection. Worked in a SCRUM-based team, contributing to sprint planning, game mechanics, and UI design. Used Git/GitHub for version control and collaborative development.",
    image: "/frog.png",
    button1Label: "Play",
    button1Href: "https://google.com",
    button2Label: "Github",
    button2Href: "https://github.com/NukaCola27/CSC131_Team3.git"
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
    description: "I engineered a Bluetooth-controlled RC vehicle using an STM32 microcontroller programmed in Embedded C. The system integrates UART-based wireless communication to receive commands and dynamically modulates PWM signals to control both DC and servo motors in real time. I leveraged a UNIX terminal and an Analog Discovery Oscilloscope to debug and validate signal timing, connectivity, and motor responsiveness. This project demonstrates my hands-on experience in firmware development, embedded systems integration, and real-time motor control.",
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
      {/* The rest of your content */}
      <div className="relative z-10 pt-32 max-w-7xl mx-auto px-4">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage; 