"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: {
    name: string;
    level: number;
    color: string;
  };
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
    >
      {/* Skill Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>

      {/* Skill Level Indicator */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Advanced</span>
        <span>Expert</span>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          {skill.level >= 90 && "Expert-level proficiency with production experience"}
          {skill.level >= 75 && skill.level < 90 && "Strong practical experience"}
          {skill.level >= 60 && skill.level < 75 && "Comfortable with core concepts"}
          {skill.level < 60 && "Learning and building projects"}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillBadge;