import React, { useEffect, useState } from 'react'

type Theme="dark" | "light" | "system" | null;

export default function ThemeToggleButton() {

  return (
    <div id='toggle-button-bar' className='w-10 h-3 mt-2 ml-2 flex items-center rounded-full bg-slate-400 overflow-visible transition-all'>
      <div id='toggle-button' className='h-5 w-5 bg-slate-700 rounded-full cursor-pointer transition-all' ></div>
    </div>
  )
}