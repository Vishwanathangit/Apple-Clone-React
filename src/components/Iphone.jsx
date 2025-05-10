import React from 'react';
import iphone from '../assets/images/Iphone.jpg';
import Built from '../assets/images/MultiColor.png';
import iphonemobile from '../assets/images/Iphonemobile.jpg';


const Iphone = () => {
    return (
        <>
            <style>
                {`
                    .bg-iphone {
                        background-image: url(${iphone});
                    }
                    @media (max-width: 640px) {
                        .bg-iphone {
                            background-image: url(${iphonemobile});
                        }
                    }
                `}
            </style>
            <div
                className="w-full h-[650px] bg-iphone bg-cover bg-center flex flex-col items-center px-4 mt-3 cursor-pointer"
                style={{
                    backgroundPosition: 'center top',
                }}
            >
                <div className="text-center max-w-2xl mx-auto mt-10">
                    <h1 className="text-5xl font-bold text-black mb-4">iPhone</h1>
                    <h3 className="text-2xl text-black mb-6">
                        Meet the iPhone 16 family.
                    </h3>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium transition-colors duration-200">
                            Learn more
                        </button>
                        <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors duration-200">
                            Shop iPhone
                        </button>
                    </div>
                    <img
                        className="w-[300px] max-w-full mx-auto mt-[-60px]"
                        src={Built}
                        alt="Built for Apple Intelligence"
                    />
                </div>
            </div>
        </>
    );
};

export default Iphone;