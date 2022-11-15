import React from 'react';

function PortItem({ title, img, stack, link }) {
    return (
        <div>
            <img src="{img}" alt="Portfolio item image" className='cursor-pointer object-cover w-full h-36 md:h-48' />
            <div className='w-full p-4'>
                <h3>{title}</h3>
                <p>{stack.map(stackitem => (
                    <span>{stackitem}</span>
                ))}</p>
            </div>
       </div>
    )
}

export default PortItem