"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe } from "lucide-react"

export default function About() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      description: "Building responsive and interactive user interfaces with modern frameworks.",
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Creating intuitive and visually appealing designs that enhance user experience.",
    },
    {
      name: "Web Applications",
      icon: <Globe className="w-6 h-6" />,
      description: "Developing full-stack web applications with robust functionality.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 gradient-text">ABOUT ME</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              I create <span className="text-purple-400">digital experiences</span> that people love
            </h3>
            <p className="text-foreground/80 mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating seamless, user-friendly
              experiences. With expertise in modern web technologies, I bring ideas to life through clean code and
              creative solutions.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical excellence with artistic vision, resulting in projects that not only
              function flawlessly but also captivate and engage users.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                My Process
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-secondary/50 rounded-lg border border-border gradient-border"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-purple-500/20 rounded-lg text-purple-400">{skill.icon}</div>
                  <h4 className="text-xl font-bold">{skill.name}</h4>
                </div>
                <p className="text-foreground/80">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

