import React from 'react';
import Multi from '../assets/images/MultiColor.png';
import Laplap from '../assets/images/Laplap.jpg';
import Padmobile from '../assets/images/Padmobile.jpg';
import Mac from '../assets/images/Mac.jpg';
import Maclap from '../assets/images/Maclap.jpg';

const Macbook = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* MacBook Air Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${Mac})` }}
                >
                    <div className="mt-[-250px]">
                        <h1 className="text-4xl font-bold text-black mb-2">MacBook Air</h1>
                        <h3 className="text-xl text-black mb-6">Sky blue colour. Sky high performance with M4.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img
                        className="w-[300px] absolute bottom-[-9px] mx-auto"
                        src={Multi}
                        alt="Built for Apple Intelligence"
                    />
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${Maclap})` }}
                >
                    <div className="mt-[-250px]">
                        <h1 className="text-4xl font-bold text-black mb-2">MacBook Air</h1>
                        <h3 className="text-xl text-black mb-6">Sky blue colour. Sky high performance with M4.</h3>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img
                        className="w-[300px] absolute bottom-[-9px] mx-auto"
                        src={Multi}
                        alt="Built for Apple Intelligence"
                    />
                </div>
            </div>

            {/* iPad Pro Section */}
            <div className="w-full md:w-1/2 m-2 h-[550px] relative">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full md:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${Padmobile})` }}
                >
                    <div className="absolute top-16 flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold text-black mb-2">College Students</h1>
                        <h3 className="text-xl text-black">Mac and iPad.</h3>
                        <h3 className="text-xl text-black mb-6">Major. In any field.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden md:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${Laplap})` }}
                >
                    <div className="absolute top-12 flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold text-black mb-2">College Students</h1>
                        <h3 className="text-xl text-black">Mac and iPad.</h3>
                        <h3 className="text-xl text-black mb-6">Major. In any field.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Macbook;