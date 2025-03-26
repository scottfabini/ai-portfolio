'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

const experience: Experience[] = [
  {
    company: 'Adobe / Marketo',
    position: 'Senior Software Engineer',
    startDate: '2017',
    endDate: 'Present',
    description: 'Developed and maintained the Marketo product, a marketing automation platform. Worked on the core product and the REST API.',
    technologies: ['Java', 'Spring Boot', 'Performance Optimization'],
  },
  {
    company: 'Portland State University',
    position: 'Facilitator - Object Oriented / Data Structures Lab',
    startDate: '2015',
    endDate: '2016',
    description: 'Demonstrated introductory object oriented concepts and data structures for ~30 students per class in weekly whiteboard sessions.',
    technologies: ['Java', 'Object Oriented Programming'],
  },
  {
    company: 'Radisys',
    position: 'Systems Architect / Product Line Manager',
    startDate: '2010',
    endDate: '2014',
    description: 'Developed business case justifying the project and presented to executive management for project approval. Defined hardware architecture and software requirements. Drove the project schedule, ensuring engineering team met deliverables. Engaged in face-to-face meetings with customers to drive sales. Product annual revenues ranged from $3M-$15M.',
    technologies: ['COM-Express', 'Intel', 'PowerPC'],
  },
  {
    company: 'Motorola',
    position: 'Systems Architect / Hardware Engineer',
    startDate: '2000',
    endDate: '2010',
    description: 'Defined hardware architecture for CompactPCI and AdvancedTCA high-availability (5-nines) telecom systems. Designed Backplanes, I/O Transition Modules, and an IPMI Management Controller featuring a 150k gate FPGA.',
    technologies: ['5 Nines Availability', 'IPMI', 'Telecom Backplane'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full" />
              <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-primary-600 mb-2">
                  {exp.position}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 