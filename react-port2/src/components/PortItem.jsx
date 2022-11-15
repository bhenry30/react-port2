import React from 'react';

function PortItem({ title, img, stack, link }) {
    return (
        <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
            <img src={img} alt="Portfolio item image" className='cursor-pointer object-cover w-full h-36 md:h-48' />
            <div className='w-full p-4'>
                <h3 className='text-lg font-semibold md:text-xl mb-2 md:mb-3'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center text-xs justify-start md:text-sm'>
                    {stack.map(stackitem => (
                    <span className='inline-block px-2 py-1 font-semibold border-stone-900 border-2 rounded-md'>{stackitem}</span>
                    ))}
                </p>
            </div>
       </div>
    )
}

export default PortItem