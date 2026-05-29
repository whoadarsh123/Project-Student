"use client"
import { Menu,Settings,Tv, BookOpen, House, X, Pointer,} from 'lucide-react'
import React from 'react'
import { anticipate, easeOut, motion, rgba } from "motion/react"
import { useState } from 'react'
import { animate } from 'motion'
import { Black_And_White_Picture, Purple_Purse } from 'next/font/google'
import Progress from "@/app/components/progress"

const page = () => {
  const [isOpen , setIsOpen]= useState(false);
  const togleSidebar = () =>
  {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex h-screen w-screen overflow-hidden">
    <aside className={`fixed top-0 left-0 z-30 h-screen flex flex-col p-3  justify-start items-center gap-15 bg-slate-900 transition-all duration-300 ${isOpen ? 'w-64' : 'w-15'}`}>
     
        <motion.div  whileHover={{color: "rgb(56, 189, 248)"}}><Menu className=' w-full cursor-pointer position-sticky'/></motion.div>
        <motion.div className='cursor-pointer'  whileHover={{color: "rgb(56, 189, 248)"}}><House/></motion.div>
        <motion.div className='cursor-pointer'  whileHover={{color: "rgb(56, 189, 248)"}}><Tv /></motion.div>
        <motion.div className='cursor-pointer' whileHover={{color: "rgb(56, 189, 248)"}}> <BookOpen /></motion.div>
        <motion.div  whileHover={{color: "rgb(56, 189, 248)"}}><Settings className='mt-55 cursor-pointer' /></motion.div>
          
       
        
</aside>
   <div className='w-screen h-screen overflow-y-auto ml-15 bg-black p-5 flex flex-col gap-5 text-white font-bold text-xs'>
      
      <div className='flex w-full'>
        <motion.div whileHover={{y:5,  borderColor: "rgb(56, 189, 248)"}}   className='h-[360px] w-2/3 border-slate-700 border rounded-xl p-5 relative'>
          <motion.div initial={{opacity:0 , y:0}} animate={{opacity:1, x:10, y:20}} className='text-5xl text-gray-400'>
            Welcome Back
            <motion.div initial={{opacity:0 , y:0}} animate={{opacity:1, x:10, y:20}} className='rounded-4xl w-25 h-30 border-10 border-amber-500 text-amber-50 text-7xl'>Adarsh</motion.div>
           <Progress/>
            </motion.div>
        </motion.div>
        <motion.div whileHover={{y:5,  borderColor: "rgb(56, 189, 248)"}} className='h-[360px] w-1/3 border border-slate-700 rounded-xl p-5 ml-5'>
        
        </motion.div>
      </div>

      <div className='flex w-full'>
        <motion.div whileHover={{y:5, borderColor: "rgb(56, 189, 248)"}} className='h-[240px] w-1/3 border border-slate-700 rounded-xl p-5'>
          
        </motion.div>
        <motion.div whileHover={{y:5,  borderColor: "rgb(56, 189, 248)"}} className='h-[240px] w-2/3 border border-slate-700 rounded-xl p-5 ml-5'>
        Cources Tiles
        </motion.div>
      </div>

    </div>
    </div>
  )
}

export default page
