import React from 'react'
import ipadmobile from '../assets/images/Ipdamobile.jpg'
import ipadlap from '../assets/images/Ipadlap.jpg'
import lap from '../assets/images/Lap.jpg'
import lapmobile from '../assets/images/Lapmobile.jpg'
import Multi from '../assets/images/MultiColor.png'
import ipadair from '../assets/images/Ipadair.png'

const Ipadair = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* iPad Air Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile View */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${ipadmobile})` }}
                >
                    <div className="mt-[-290px]">
                        <img className="w-[150px] mx-auto mb-2" src={ipadair} alt="ipadair" />
                        <h3 className="text-xl text-black mb-6">Now supercharged by the M3 chip.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-[300px] absolute bottom-[-9px] mx-auto" src={Multi} alt="Built for Apple Intelligence" />
                </div>

                {/* Desktop View */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${ipadlap})` }}
                >
                    <div className="mt-[-290px]">
                        <img className="w-[150px] mx-auto mb-2" src={ipadair} alt="ipadair" />
                        <h3 className="text-xl text-black mb-6">Now supercharged by the M3 chip.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-[300px] absolute bottom-[-9px] mx-auto" src={Multi} alt="Built for Apple Intelligence" />
                </div>
            </div>

            {/* MacBook Pro Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile View */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${lapmobile})` }}
                >
                    <div className="mt-[-290px]">
                        <h1 className="text-4xl font-bold text-white mb-2">MacBook Pro</h1>
                        <h3 className="text-xl text-white mb-6">A work of smart.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-[300px] absolute bottom-[-9px] mx-auto" src={Multi} alt="Built for Apple Intelligence" />
                </div>

                {/* Desktop View */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${lap})` }}
                >
                    <div className="mt-[-290px]">
                        <h1 className="text-4xl font-bold text-white mb-2">MacBook Pro</h1>
                        <h3 className="text-xl text-white mb-6">A work of smart.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-[300px] absolute bottom-[-9px] mx-auto" src={Multi} alt="Built for Apple Intelligence" />
                </div>
            </div>
        </div>
    )
}

export default Ipadair
