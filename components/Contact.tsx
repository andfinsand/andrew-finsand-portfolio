import React from 'react'

const Contact = () => {
  return (
    <div className="h-1" id="contact">
        <div className="flex justify-center bg-black p-20">
            <div className='bg-dark w-1/2 border border-seagreen rounded-xl p-10'>
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
                            placeholder="Type your message."
                            className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        ></textarea>
                    </div>
                    <button className="inline-block self-end rounded-lg font-bold uppercase text-white hover:bg-slate-700">
                    Send
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact