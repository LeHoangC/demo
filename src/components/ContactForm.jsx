import { useState } from 'react'
import BorderReveal from './BorderRevealEffect'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: '',
        message: '',
    })

    const handleSubmit = () => {
        console.log('Form submitted:', formData)
        alert('Form submitted successfully!')
    }

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        })
    }

    return (
        <div className="min-h-[60vh] bg-[#e9e92f] flex items-center justify-center p-8">
            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold tracking-wider mb-4 text-gray-800">CONTACT US</p>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                        EVERY STORY
                        <br />
                        BEGINS WITH A<br />
                        CONVERSATION
                    </h1>
                    <p className="text-lg mb-8 text-gray-800">Reach out — let's build something enduring.</p>
                    <button className="group self-start relative py-3 bg-transparent text-base font-semibold cursor-pointer text-black overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            |
                        </span>
                        <span className="mx-2 tracking-wider">BOOK A CALL</span>
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                            |
                        </span>
                    </button>
                </div>

                {/* Right Section - Form */}
                <div className="flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Name Field */}
                        <div className="pb-2">
                            <label className="block text-xs font-semibold tracking-wider mb-2 text-gray-800">
                                NAME *
                            </label>
                            <input
                                type="text"
                                placeholder="Full"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-600 text-lg"
                            />
                            <BorderReveal className="mt-1" borderColor="black" direction="left" />
                        </div>

                        {/* Email Field */}
                        <div className="pb-2">
                            <label className="block text-xs font-semibold tracking-wider mb-2 text-gray-800">
                                EMAIL *
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-600 text-lg"
                            />
                            <BorderReveal className="mt-1" borderColor="black" direction="left" />
                        </div>

                        {/* Inquiry Type Field */}
                        <div className="pb-2">
                            <label className="block text-xs font-semibold tracking-wider mb-2 text-gray-800">
                                INQUIRY TYPE *
                            </label>
                            <select
                                value={formData.inquiryType}
                                onChange={(e) => handleChange('inquiryType', e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-900 text-lg cursor-pointer"
                            >
                                <option value="">Select one...</option>
                                <option value="general">General Inquiry</option>
                                <option value="business">Business</option>
                                <option value="support">Support</option>
                                <option value="partnership">Partnership</option>
                            </select>
                            <BorderReveal className="mt-1" borderColor="black" direction="left" />
                        </div>

                        {/* Message Field */}
                        <div className="pb-2">
                            <label className="block text-xs font-semibold tracking-wider mb-2 text-gray-800">
                                MESSAGE *
                            </label>
                            <textarea
                                placeholder="Leave us a note"
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                rows="1"
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-600 text-lg resize-none"
                            />
                            <BorderReveal className="mt-1" borderColor="black" direction="left" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-gray-900 text-yellow-300 px-10 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
