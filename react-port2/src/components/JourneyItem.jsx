import React from 'react';

function JourneyItem({ title, description, years }) {
    return (
       <ol className='flex flex-col md:flow-row relative border-l border-stone-300 dark:border-stone-400'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5  dark:bg-stone-400'/>
                <p className='flex flex-wrap gap-4 items-center flex-row justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-light tracking-wide text-stone-100 bg-gunmetal rounded-sm dark:text-stone-900 dark:bg-stone-100'>
                        {years}
                    </span>
                    <h3 className='text-lg font-semibold text-gunmetal dark:text-stone-100'>
                        {title}
                    </h3>
                </p>
                    <p className='my-2 text-base font-normal text-stone-600 dark:text-stone-300'>
                        {description}
                    </p>
               
            </li>
       </ol>
    )
}

export default JourneyItem