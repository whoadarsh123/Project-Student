"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Progress = () => {
  const activeDays = [true, true, false, true, false, true, false]; 
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="absolute -right-5 mt-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 h-36 w-80 rounded-xl  text-sm font-mono text-slate-400 flex flex-col justify-between"
      >
        <div className="text-[10px] tracking-wider uppercase font-bold text-slate-500">
          Weekly Attendance
        </div>

        <div className="flex gap-4 justify-center items-center h-full">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
                  activeDays[index] 
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' 
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {activeDays[index] ? '✓' : '•'}
              </motion.div>
              <span className="text-[11px] font-semibold">{day}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;