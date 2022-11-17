import React from 'react';

function PortItem({ title, img, stack, link }) {
    return (
        <a href={link} target="_blank" rel='noopender noreferrer' className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'
        >
            <img src={img} alt="Portfolio item image" className='cursor-pointer w-full h-36 md:h-48' />
        
            <div className='w-full p-3'>
                <h3 className='text-lg font-semibold md:text-xl mb-2 md:mb-3 dark:text-white'>{title}</h3>
                <p className='flex flex-wrap gap-1.5 flex-row items-center text-xs justify-start md:text-sm dark:text-white'>
                    {stack.map(stackitem => (
                    <span className='inline-block px-2 py-1 font-semibold border-stone-900 dark:border-white border-2 rounded-md'>{stackitem}</span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortItem