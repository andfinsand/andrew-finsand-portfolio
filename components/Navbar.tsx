import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 shadow-xl z-[100] bg-transparent text-white">
        <div className="navbar justify-center">

            {/* replace home button with logo, position to left and return to homepage. */}
            <div className="text-left">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl mx-10">Home</a>
                </Link>
            </div>
            <div className="text-center">
                <Link href="/About">
                    <a className="btn btn-ghost normal-case text-xl mx-10">About</a>
                </Link>
                <Link href="/Projects">
                    <a className="btn btn-ghost normal-case text-xl mx-10">Projects</a>
                </Link>
                <Link href="/Skills">
                    <a className="btn btn-ghost normal-case text-xl mx-10">Skills</a>
                </Link>
                <Link href="/Contact">
                    <a className="btn btn-ghost normal-case text-xl mx-10">Contact</a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar