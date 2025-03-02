"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Google AdSense Approved Website 1",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A fully Google AdSense-approved website built with HTML and Tailwind CSS.",
      technologies: ["HTML", "Tailwind CSS"],
      link: "https://snaptikmm.com",
      github: "#",
    },
    {
      id: 2,
      title: "Google AdSense Approved Website 2",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Another Google AdSense-approved website designed for monetization.",
      technologies: ["HTML", "Tailwind CSS"],
      link: "https://snaptikmmpro.com",
      github: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "A mobile app design for a fitness tracking application.",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A modern e-commerce platform with advanced filtering and payment integration.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://www.pgshophub.shop/",
      github: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A sleek portfolio website with smooth animations and responsive design.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
    },
  ];

  const filters = ["All", "Web Development", "UI/UX Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background/95 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 gradient-text">
            MY PROJECTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and
            expertise in web development and design.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl overflow-hidden border border-border"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-secondary/80 rounded-full text-secondary-foreground hover:bg-secondary transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-purple-600/80 rounded-full text-white hover:bg-purple-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-card-foreground/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
