import React from 'react'

const Navbar = () => {
    return (
        <div className="flex fixed w-screen backdrop-blur-2xl bg-opacity-60 bg-navblue shadow-custom shadow-blue z-[100] h-14 md:justify-center">

            {/* Hamburger menu nav */}
            <div className="dropdown self-center">
                <label tabIndex={0} className="btn btn-ghost fixed-start md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#BED3EF"
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
                    className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-blue p-2 text-neutral shadow"
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

            {/* Horizontal nav */}
            <div className="flex invisible md:visible">
                <div className="self-center">
                    <a data-scroll="about" href="/#about" className="btn btn-ghost normal-case text-blue text-sm font-normal mx-10 hover:text-seagreen hover:bg-opacity-0">About</a>
                </div>
                <div className="self-center">
                    <a data-scroll="projects" href="/#projects" className="btn btn-ghost normal-case text-blue text-sm font-normal mx-10 hover:text-seagreen hover:bg-opacity-0">Projects</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar