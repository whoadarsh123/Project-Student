"use client"
import { Menu, Settings, Tv, BookOpen, House, X, Pointer, } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import Progress from "@/app/components/progress"
import { createClient } from '@/utils/supabase/client'
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient()



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase.from('Students-details').select('*')
        if (error) {
          setError(error.message)
        } else {
          setCourses(data)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses() // Fixed: Clean function invocation without the stray '>' character
  }, [])

  if (loading) return <div className="p-6 text-white">Loading...</div>
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className={`fixed top-0 left-0 z-30 h-screen flex flex-col p-3  justify-start items-center gap-15 bg-slate-900 transition-all duration-300 ${isOpen ? 'w-64' : 'w-15'}`}>

        <motion.div whileHover={{ color: "rgb(56, 189, 248)" }}><Menu className=' w-full cursor-pointer position-sticky' /></motion.div>
        <motion.div className='cursor-pointer' whileHover={{ color: "rgb(56, 189, 248)" }}><House /></motion.div>
        <motion.div className='cursor-pointer' whileHover={{ color: "rgb(56, 189, 248)" }}><Tv /></motion.div>
        <motion.div className='cursor-pointer' whileHover={{ color: "rgb(56, 189, 248)" }}> <BookOpen /></motion.div>
        <motion.div whileHover={{ color: "rgb(56, 189, 248)" }}><Settings className='mt-55 cursor-pointer' /></motion.div>



      </aside>
      <div className='w-screen h-screen overflow-y-auto ml-15 bg-black p-5 flex flex-col gap-5 text-white font-bold text-xs'>

        <div className='flex w-full'>
          <motion.div whileHover={{ y: 5, borderColor: "rgb(56, 189, 248)" }} className='h-[360px] w-2/3 border-slate-700 border rounded-xl p-5 relative'>
            <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 5 }} className='text-5xl text-gray-400'>
              Welcome Back
              {courses?.map((student) => (
                <div key={student.id}>

                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 5 }}
                    className='rounded-4xl mt-3 w-25 h-30 border-10 border-amber-500 text-amber-50 text-7xl'
                  >
                    {student.name}
                  </motion.div>
                  <Progress />

                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={{ y: 5, borderColor: "rgb(56, 189, 248)" }} className='h-[360px] w-1/3 border border-slate-700 rounded-xl p-5 ml-5'>

          </motion.div>
        </div>

        <div className='flex w-full'>
          <motion.div whileHover={{ y: 5, borderColor: "rgb(56, 189, 248)" }} className='h-[240px] w-1/3 border border-slate-700 rounded-xl p-5'>

          </motion.div>
          <motion.div whileHover={{ y: 5, borderColor: "rgb(56, 189, 248)" }} className='h-[240px] w-2/3 border border-slate-700 rounded-xl p-5 ml-5'>

            {courses?.map((student) => (
              <div key={student.id} className="p-4  rounded-2xl bg-slate-900/20">

                <div className="flex flex-wrap gap-3">
                  {student['course-title']?.map((courseName, index) => (
                    <div
                      key={index}
                      className="w-fit p-3 border border-gray-700 rounded-xl bg-slate-900 shadow-sm"
                    >
                      <h2 className="text-base font-semibold text-amber-100">
                        {courseName}
                      </h2>
                    </div>

                  ))}
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default page