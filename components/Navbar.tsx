import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center fixed w-full h-16 z-[100] bg-black text-white shadow-custom shadow-seagreen">

        {/* replace home button with logo, position to left and return to homepage. */}
        {/* <div className="text-left">
            <Link href="/">
                <a className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">Home</a>
            </Link>
        </div> */}
        <div className="self-center">
            <a data-scroll="about" href="/#about" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">About</a>
        </div>
        <div className="self-center">
            <a data-scroll="projects" href="/#projects" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">Projects</a>
        </div>
        <div className="self-center">
            <a data-scroll="skills" href="/#skills" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">Skills</a>
        </div>
        <div className="self-center">
            <a data-scroll="contact" href="/#contact" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">Contact</a>
        </div>
    </div>
  )
}

export default Navbar
