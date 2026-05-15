"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  
  
 
  FaCloud,
  FaBrain,
 

} from "react-icons/fa";
import {
 
} from "react-icons/si";

const skills = [
  {
    domain: "Cognitive & Analytical Skills",
    icon: <FaCode className="text-xl text-rose-600" />,
    skills: ["Creative & Critical Thinking", "Organizational & Problem-solving", "Attention to Detail", "Active Listening & Decision-Making"],
  },
  {
    domain: "Interpersonal & Communication",
    icon: <FaBrain className="text-xl text-rose-500" />,
    skills: ["Excellent Communication", "Teamwork and Collaboration"],
  },
  {
    domain: "Personal Effectiveness & Work Ethic",
    icon: <FaCloud className="text-xl text-rose-400" />,
    skills: [
      "Dependable and Responsible",
      "Flexible and Adaptable",
      "Multitasking Abilities"
    ],
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-rose-50 to-rose-100 text-rose-900 flex flex-col items-center relative overflow-hidden">
      {/* Background petals will appear here automatically from App.js */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skill Set
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {skills.map((category, index) => (
          <motion.div
            key={category.domain}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-70 backdrop-blur-md border border-rose-200 rounded-2xl shadow-lg p-6 w-72 hover:bg-opacity-80 cursor-default"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.domain}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-rose-100 text-rose-800 text-sm px-3 py-1 rounded-full shadow-sm hover:bg-rose-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}