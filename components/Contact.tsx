import React from 'react'

const Contact = () => {
  return (
    // <div className="h-1 border-t-2 border-seagreen" id="contact">
    <div id="contact">
        <div className="flex justify-center h-screen w-auto bg-black p-20">
            <div className="m-10 self-center">
                <div className="text-5xl text-seagreen font-bold font-spacegrotesk m-10">
                    Let's Connect!
                </div>
                <div className="flex justify-center">
                    <div className="m-5">
                        <a href="https://www.linkedin.com/in/andrewfinsand/" target="_blank"><img src = {"linkedinIcon.png"}></img></a>
                    </div>
                    <div className="m-5">
                        <a href="https://github.com/andfinsand" target="_blank"><img src = {"githubIcon.png"}></img></a>
                    </div>
                    <div className="m-5">
                        <img src = {"emailIcon.png"}></img>
                    </div>
                </div>
            </div>
            {/* form */}
            <div className='self-center bg-medium rounded-xl p-10'>
                <form
                    action="https://formspree.io/f/mdobokkz"
                    method="POST"
                    className="flex flex-col space-y-4"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                        <label htmlFor="name" className="sr-only text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                            required
                        />
                        <label htmlFor="email" className="sr-only text-sm">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                            required
                        />
                        <label htmlFor="email" className="sr-only text-sm">
                            Type message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Hey Andrew,"
                            className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        ></textarea>
                    </div>
                    <div className="flex self-end">
                        <button className="btn w-36 btn-secondary text-dark font-spacegrotesk bg-seagreen rounded-full border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">
                        Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact