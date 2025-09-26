"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  image?: string;
  /** Internal route preferred (e.g., "/projects/crowdx"). Falls back to button1Href if absent. */
  href?: string;
  button1Label?: string;
  button1Href?: string;
  button2Label?: string;
  button2Href?: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-8 px-2 mt-16 w-full max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => {
        const linkHref = project.href ?? project.button1Href ?? "#";
        const isInternal = linkHref.startsWith("/");

        const Card = (
          <motion.div
            key={project.title + idx}
            className="group relative h-[440px] min-h-[440px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Media */}
            <div className="absolute inset-0">
              {project.image ? (
                <Image
                src={project.image}
                alt={`${project.title} image`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
                style={{
                  objectPosition: project.title === "Mobile RC Car" ? "80% center" : "center",
                }}
                unoptimized
              />



              ) : (
                <div className="h-full w-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100" />
              )}
              {/* Hover overlay (light) */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5">
              <h3
              className="text-lg font-semibold text-gray-900 opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
            >
              {project.title}
            </h3>

            {/* DESCRIPTION: hidden until hover (no space taken) */}
            <p className="mt-2 text-sm text-gray-700 opacity-0 invisible max-h-0 overflow-hidden transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:max-h-40">
              {project.description}
            </p>


              {/* CTA: hidden until hover (no space taken) */}
              <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-700 opacity-0 invisible transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                View project →
              </span>
            </div>
          </motion.div>
        );

        return isInternal ? (
          <Link key={project.title + idx} href={linkHref} className="block" aria-label={project.title}>
            {Card}
          </Link>
        ) : (
          <a
            key={project.title + idx}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={project.title}
          >
            {Card}
          </a>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
