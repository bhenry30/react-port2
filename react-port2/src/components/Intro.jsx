import React from 'react';

function Intro() {
    return (
        <div className='flex flex-col text-center items-center justify-center pb-6 pt-12'>
            <h1 className='text-4xl mb-2 md:text-6xl font-bold'>Brandon Henry</h1>
            <p className='text-base mb-3 font-medium md:text-xl'>Web Developer</p>
            <img src='./assets/photos/brandon-black-and-white.jpg' alt="Black and White image of Brandon" className='h-80 mb-3 md:h-80' />
            <p className='text-sm mb-6 font-bold max-w-xl'>Full stack web developer with a background in management, media production, and talent booking. Earned a certificate in full stack web development from The University of Texas at Austin with a focus in JavaScript, HTML, CSS, MySQL, and MERN stack. Determined to solve problems and build applications using innovative solutions that directly serve the user story.</p>
        </div>
    )
}

export default Intro