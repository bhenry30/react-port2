import React from 'react';

function JourneyItem({ title, description, years }) {
    return (
       <ol className='flex flex-col md:flow-row relative border-1 border-stone-200'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5-left-1.5 border border-white'/>
                <p className='flex flex-wrap gap-4 items-center flex-row justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md'>
                        {years}
                    </span>
                    <h3 className='text-lg font-semibold text-stone-900'>
                        {title}
                    </h3>
                </p>
                    <p className='my-2 text-base font-normal text-stone-500'>
                        {description}
                    </p>
               
            </li>
       </ol>
    )
}

export default JourneyItem