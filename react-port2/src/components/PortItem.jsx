import React from 'react';

function PortItem({ title, img, stack, link }) {
    return (
        <a href={link} target="_blank" rel='noopender noreferrer' className='text-gunmetal bg-white rounded-md shadow-md shadow-gunmetal/10 hover:shadow-lg hover:shadow-gunmetal/20 dark:text-stone-900 dark:bg-stone-100 rounded-md dark:shadow-md dark:shadow-gray-900/10 dark:hover:shadow-lg dark:hover:shadow-gray-900/20 overflow-hidden'
        >
            <img src={img} alt="Portfolio item image" className='cursor-pointer w-full h-36 md:h-48' />
        
            <div className='w-full p-3'>
                <h3 className='text-lg font-semibold md:text-xl mb-2 md:mb-3 gunmetal dark:gunmetal'>{title}</h3>
                <p className='flex flex-wrap gap-1.5 flex-row items-center text-xs justify-start md:text-sm dark:gunmetal'>
                    {stack.map(stackitem => (
                    <span className='inline-block px-2 py-1 text-xs font-medium text-gunmetal bg-stone-200 rounded-sm dark:text-stone-900 dark:bg-stone-300'>{stackitem}</span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortItem