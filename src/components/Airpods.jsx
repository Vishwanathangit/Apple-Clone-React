import React from 'react'
import { FaApple } from 'react-icons/fa'
import man from '../assets/images/Man.jpg'
import manmobile from '../assets/images/Manmobile.jpg'
import phonemobile from '../assets/images/Phonemobile.jpg'
import phonelap from '../assets/images/Phonelap.jpg'
const Airpods = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* MacBook Air Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${manmobile})` }}
                >
                    <div className="mt-[250px]">
                        <h1 className="text-4xl font-bold text-white mb-2">AirPods 4</h1>
                        <h3 className="text-xl text-white mb-6 ">
                            Iconic. Now supersonic.
                        </h3>
                        <h3 className="text-xl text-white mb-6 bottom-3">
                            Available with Active Noise Cancellation.<sup>1</sup>
                        </h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${man})` }}
                >
                    <div className="mt-[320px]">
                        <h1 className="text-4xl font-bold text-white mb-2">AirPods 4</h1>
                        <h3 className="text-xl text-white mb-6 ">
                            Iconic. Now supersonic.
                        </h3>
                        <h3 className="text-xl text-white mb-6 bottom-3">
                            Available with Active Noise Cancellation.<sup>1</sup>
                        </h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* iPad Pro Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${phonemobile})` }}
                >
                    <div className="absolute top-16 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <FaApple className="text-4xl text-black" />
                            <h1 className="text-4xl font-bold text-black">Trade In</h1>
                        </div>
                        <h3 className="text-xl text-black">Upgrade and save. It's that easy.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium mt-4">
                            Get your estimate
                        </button>
                    </div>

                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${phonelap})` }}
                >
                    <div className="absolute top-12 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <FaApple className="text-4xl text-black" />
                            <h1 className="text-4xl font-bold text-black">Trade In</h1>
                        </div>
                        <h3 className="text-xl text-black">Upgrade and save. It's that easy.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium mt-4">
                            Get your estimate
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Airpods
