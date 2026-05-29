import React from 'react'
import { motion } from 'motion/react'

const progress = () => {
  return (
    <div >
      <motion.div className='p-2 h-38  w-80  absolute right-10 rounded-xl text-xl font-mono'>
        <div className='relative flex justify-center'>
            <div className='absolute top-20  gap-9 justify-center flex '>
            <h1>S</h1>
            <h1>M</h1>
            <h1>T</h1>
            <h1>W</h1>
            <h1>T</h1>
            <h1>F</h1>
            <h1>S</h1>
            </div>
            </div>
      </motion.div>
    </div>
  )
}

export default progress
