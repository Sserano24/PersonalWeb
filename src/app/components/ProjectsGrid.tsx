"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  image?: string;
  button1Label?: string;
  button1Href?: string;
  button2Label?: string;
  button2Href?: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  // Track which card is expanded
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-16 px-2">
      {projects.map((project, idx) => {
        const expanded = expandedIdx === idx;
        return (
          <motion.div
            key={project.title + idx}
            className="bg-black/90 dark:bg-black rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 min-h-[440px] h-[440px] relative overflow-hidden"
            animate={expanded ? {
              scale: 1.03,
              boxShadow: "0 0 0 1px rgb(37, 44, 48), 0 10px 25px 0 rgba(0,0,0,0.4)",
              borderColor: "#a5b4fc"
            } : {
              scale: 1,
              boxShadow: "0 4px 14px 0 rgba(0,0,0,0.15)",
              borderColor: "rgba(255,255,255,0.1)"
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 0 1px rgb(165, 224, 252), 0 10px 25px 0 rgba(0,0,0,0.4)",
              borderColor: "#a5b4fc"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Image and Title (default state) */}
            <AnimatePresence initial={false}>
              {!expanded && (
                <motion.div
                  key="image-title"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center w-full h-full justify-center absolute top-0 left-0"
                  style={{ minHeight: '100%', minWidth: '100%' }}
                >
                  <div className="flex-shrink-0 w-full flex justify-center items-center mb-6" style={{ height: "70%" }}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title + " image"}
                        width={300}
                        height={320}
                        className="object-cover rounded-xl max-w-[80%] w-full h-full mx-auto cursor-pointer"
                        onClick={() => setExpandedIdx(idx)}
                      />
                    ) : (
                      <div className="bg-gradient-to-tr from-purple-500 via-blue-500 to-indigo-500 rounded-xl opacity-60 max-w-[80%] w-full h-full mx-auto cursor-pointer" onClick={() => setExpandedIdx(idx)} />
                    )}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2 text-center hover:text-slate-900 dark:hover:text-slate-300 transition-colors cursor-pointer"
                    onClick={() => setExpandedIdx(idx)}
                  >
                    {project.title}
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Title and Description (expanded state) */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center w-full h-full justify-center absolute top-0 left-0 px-6"
                  style={{ minHeight: '100%', minWidth: '100%' }}
                >
                  <h3
                    className="text-2xl font-bold text-white mb-2 text-center hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    onClick={() => setExpandedIdx(null)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-base text-center mt-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    {project.button1Label && project.button1Href && (
                      <a
                        href={project.button1Href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white font-medium text-base hover:from-blue-600 hover:to-indigo-600 transition-colors shadow"
                      >
                        {project.button1Label}
                      </a>
                    )}
                    {project.button2Label && project.button2Href && (
                      <a
                        href={project.button2Href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-black/60 text-white font-medium text-base border border-white/20 hover:bg-white/10 transition-colors shadow"
                      >
                        {project.button2Label}
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid; 