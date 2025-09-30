"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  const [isSidbarOpen, setIsSidbarOpen] =useState(false)
  return (
    <>
      <button onClick={() => setIsSidbarOpen(!isSidbarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className='md:hidden'>
        <SideMenu isOpen={isSidbarOpen} onClose={() => setIsSidbarOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu