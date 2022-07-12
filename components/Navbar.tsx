import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 z-[100] bg-transparent text-white">
        <div className="navbar justify-center">

            {/* replace home button with logo, position to left and return to homepage. */}
            <div className="text-left">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl mx-10 hover:text-seagreen">Home</a>
                </Link>
            </div>
            <div className="text-center">
                <Link href="/About">
                    <a className="btn btn-ghost normal-case text-xl mx-10 hover:text-seagreen">About</a>
                </Link>
            </div>
            <div className="text-left">
                <a data-scroll="skills" href="#skills" className="btn btn-ghost normal-case text-xl mx-10 hover:text-seagreen">Skills</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
