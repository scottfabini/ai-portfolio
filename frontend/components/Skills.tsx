'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'H2', 'SQL'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD', 'Git', 'Jenkins'],
  },
  {
    name: 'Tools & Others',
    skills: ['VS Code', 'IntelliJ', 'Postman', 'JUnit', 'Maven', 'Gradle', 'Linux'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 