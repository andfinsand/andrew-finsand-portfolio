import React from 'react'

const Navbar = () => {
  return (
    <div className="flex md:justify-center fixed w-screen h-16 z-[100] bg-black text-white shadow-custom shadow-seagreen">
        {/* Menu Nav */}
        <div className="dropdown self-center">
            <label tabIndex={0} className="btn btn-ghost fixed-start md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral-content p-2 text-neutral shadow"
            >
                <li>
                    <a data-scroll="about" href="/#about">
                        About
                    </a>
                </li>
                <li>
                    <a data-scroll="projects" href="/#projects">
                        Projects
                    </a>
                </li>
            </ul>
        </div>
        {/* Horizontal Nav */}
        <div className="flex invisible md:visible">
            <div className="self-center">
                <a data-scroll="about" href="/#about" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">About</a>
            </div>
            <div className="self-center">
                <a data-scroll="projects" href="/#projects" className="btn btn-ghost normal-case text-base mx-10 hover:text-seagreen">Projects</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar