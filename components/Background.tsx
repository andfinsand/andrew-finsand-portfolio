import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div>
      <div className="bg-slate-50 flex flex-col justify-center w-full relative">
        <img src = {"backgroundDark.png"} className="w-full h-full object-cover absolute"></img>
      </div>
    </div>
  )
}

export default Background