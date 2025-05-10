import React from 'react'
import watch from '../assets/images/Iwatch.png'
import Handwatch from '../assets/images/Watch.jpg'
import Watchphone from '../assets/images/Watchmobile.jpg'

const Iwatch = () => {
    return (
        <>
            <style jsx>{`
                .watch-container {
                    background-image: url(${Handwatch});
                    background-size: cover;
                    background-position: center top;
                }
                @media (max-width: 640px) {
                    .watch-container {
                        background-image: url(${Watchphone});
                    }
                }
            `}</style>
            
            <div className="watch-container w-full h-[650px] flex flex-col items-center px-4 mt-3 cursor-pointer">
                <div className="text-center max-w-2xl mx-auto mt-10">
                    <img
                        src={watch}
                        alt="Apple Watch"
                        className="w-[200px] h-auto mx-auto mb-4"
                    />
                    <h3 className="text-2xl text-black mb-6">
                        Live healthier. Train better. Stay connected.
                    </h3>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium transition-colors duration-200">
                            Learn more
                        </button>
                        <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                            Shop Watch
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Iwatch