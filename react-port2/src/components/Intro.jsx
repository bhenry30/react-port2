import React from 'react';

function Intro() {
    return (
        <div className='flex flex-col text-center items-center justify-center pb-32 pt-32'>
            <h1 className='text-4xl mb-3 text-gunmetal dark:text-stone-100 md:text-6xl font-semibold'>Brandon Henry</h1>
            <h3 className='text-base mb-12 font-light tracking-widest md:text-xl'>WEB DEVELOPER</h3>
            <img src='./assets/photos/brandon-black-and-white.jpg' alt="Black and White image of Brandon" className='h-80 w-72 rounded-sm mb-16 md:h-80' />
            <p className='text-sm mb-6 font-regular max-w-xl'>Full stack web developer with a background in management, media production, and talent booking. Earned a certificate in full stack web development from The University of Texas at Austin with a focus in JavaScript, HTML, CSS, MySQL, and MERN stack. Determined to solve problems and build applications using innovative solutions that directly serve the user story.</p>
        </div>
    )
}

export default Intro