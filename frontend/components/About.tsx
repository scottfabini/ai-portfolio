'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a software engineer with a strong foundation in computer science and a passion for
            creating innovative solutions. My journey in software development has been driven by
            a desire to build applications that make a difference in people's lives.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I believe in writing clean, maintainable code and following best practices to deliver
            high-quality solutions. When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and sharing my knowledge with others.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">Spring Boot, Java</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Database</h3>
              <p className="text-gray-600 dark:text-gray-300">MySQL, H2</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">Docker, AWS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 