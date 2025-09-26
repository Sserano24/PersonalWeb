// app/projects/page.tsx
import ProjectsGrid, { Project } from "../components/ProjectsGrid";

const HERO_IMG = "/Screenshot 2025-05-03 214333.png"; // place in /public

const projects: Project[] = [
  {
    title: "CrowdX",
    description:
      "A crowdfunding platform where users can create campagins and collect contributions via cryptocurrency or credit/debit payments. My team and I plan to deploy this project by December 2025.",
    image: "/eth.png",
    button1Label: "Github",
    //button1Href: "https://github.com/Sserano24/CrowdX2-frontend.git",
    button1Href: "/CrowdX",


  },
    {
    title: "Robot Dog",
    description:
      "An autonomous robot dog controlled by a RaspberryPi and AI. Built with a variety of sensors for data collection and servo motors for real world interactions.",
    image: "/pidog.jpg",
    button1Label: "Github",
    //button1Href: "https://github.com/Sserano24/CrowdX2-frontend.git",
    button1Href: "/RobotDOg",


  },
    {
    title: "AI Email Agent",
    description:
      "An AI email assistant that identifies key topics and generates a reply automatically. It uses a list of containts and professional guidelines set by me.",
    image: "/Ollama.png",
    button1Label: "Github",
    //button1Href: "https://github.com/Sserano24/CrowdX2-frontend.git",
    button1Href: "/AIAgent",


  },

  {
    title: "Stinger Sprint",
    description:
      "Built a 2D arcade game in Pygame with real-time input, animation, and collision detection. Worked in a SCRUM-based team, contributing to sprint planning, game mechanics, and UI design. Used Git/GitHub for version control and collaborative development.",
    image: "/frog.png",
    button1Label: "Github",
    //button1Href: "https://github.com/NukaCola27/CSC131_Team3.git",
    button1Href: "/StingerSprint",

  },
  {
    title: "Operating System Development",
    description:
      "I developed a custom operating system in C, applying foundational concepts such as process scheduling, context switching, memory managment, and I/O handing.",
    image: "/command-line.jpg",
    button1Label: "Ask A Question",
    button1Href: "/OSDev",
  },
  {
    title: "Security Operations Center",
    description:
      "A cloud-based security lab using Wazuh SIEM, The Hive, and Shuffle for automated threat detection and response. Integrated SOC workflows, reduced manual triage time, and documented architecture for applied cybersecurity and cloud concepts.",
    image: "/SOC.png",
    button1Label: "Ask A Question",
    button1Href: "/Mimikatz",
  },
  {
    title: "Mobile RC Car",
    description:
      "Built a Bluetooth-enabled RC vehicle using an STM32 microcontroller and Embedded C. Integrated UART communication to receive commands and modulate PWM signals for DC and servo motor control. Verified signal timing and motor response using a UNIX terminal and Analog Discovery Oscilloscope.",
    image: "/STM5.webp",
    button1Label: "Ask A Question",
    button1Href: "/STM",
  },
  {
    title: "Arithmentic Logic Untit",
    description:
      "Designed an 8-bit ALU in Cadence using 45nm CMOS, implementing custom layouts for adders, logic gates, and multipliers. Verified DRC/LVS compliance and optimized for performance and physical layout constraints.",
    image: "/ALU2.png",
    button1Label: "Ask A Question",
    button1Href: "/ALU",
  },
];

const ProjectsPage = () => {
  return (
    <main className="relative min-h-screen w-full bg-white text-gray-900">
      {/* Hero header with background image (flush to top) */}
      <section aria-label="Projects hero" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-[34vh] min-h-[200px] max-h-[320px] w-full max-w-7xl items-center justify-center px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            PROJECTS
          </h1>
        </div>
      </section>

      {/* Projects on a light gray background */}
      <section className="relative w-full bg-gray-100">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:pb-20">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
