import React from 'react'

const Card = ({img , text , Duration}) => {
    return (
        <>
            <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden m-5'>
                <img className='w-full h-50 object-cover hover:scale-105 transition-transform duration-300' src={img} alt="Data Science" />
                <div className='p-5'>
                    <h2 className='text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors'>{text}</h2>
                    <p className='text-gray-600 mb-4 text-sm sm:text-base'>Master the art of Data Science with AI, Machine Learning, and Python. Build projects that prepare you for real-world roles.</p>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                        <p className='text-gray-700 font-medium text-sm sm:text-base'>⏱ Duration: <span className='font-semibold text-blue-600'>2 Years</span></p>
                        <button className='py-2 px-6 bg-blue-500 text-white rounded-full font-medium shadow hover:bg-black active:scale-95 cursor-pointer '>Inquiry Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
