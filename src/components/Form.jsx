import React from 'react'
import BorderReveal from './BorderRevealEffect'

const Form = ({ className, type }) => {
    return (
        <div className={className}>
            <div>
                <p className="text-xs font-semibold tracking-[2px] mb-5 text-black">CONTACT US {type}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-black">
                    EVERY STORY
                    <br />
                    BEGINS WITH A<br />
                    CONVERSATION
                </h2>
                <p className="text-lg mb-8 text-black">Reach out — let's build something enduring.</p>
                <button className="group relative py-3 bg-transparent text-base font-semibold cursor-pointer text-black overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">|</span>
                    <span className="mx-2 tracking-widest">BOOK A CALL</span>
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">|</span>
                </button>
            </div>
            <form className="flex flex-col gap-8 py-5 mx-4 ">
                <div>
                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">NAME *</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full py-3 bg-transparent text-base outline-none text-black placeholder-black/50"
                    />
                    <BorderReveal borderColor="black" direction="left" />
                </div>

                <div>
                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">EMAIL *</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full py-3 bg-transparent text-base outline-none text-black placeholder-black/50"
                    />
                    <BorderReveal borderColor="black" direction="left" />
                </div>

                <div>
                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">INQUIRY TYPE *</label>
                    <select className="w-full py-3 bg-transparent text-base outline-none cursor-pointer text-black">
                        <option>Select one...</option>
                        <option>Video Production</option>
                        <option>Photography</option>
                        <option>Other</option>
                    </select>
                    <BorderReveal borderColor="black" direction="left" />
                </div>

                <div>
                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">MESSAGE *</label>
                    <textarea
                        placeholder="Leave us a note"
                        rows="4"
                        className="w-full py-3 bg-transparent text-base outline-none resize-y text-black placeholder-black/50"
                    />
                    <BorderReveal borderColor="black" direction="left" />
                </div>

                <button
                    type="submit"
                    className="self-end px-10 py-4 bg-black text-[#f4e04d] border-0 rounded text-sm font-bold tracking-wider cursor-pointer transition-transform hover:scale-105"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Form
