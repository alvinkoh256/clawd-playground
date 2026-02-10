"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
    image: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">Project Preview</div>
          </div>
        </div>
        {/* Technology badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;