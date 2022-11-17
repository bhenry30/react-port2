import React from 'react';
import portfolio from '../data/portfolio';
import PortItem from './PortItem'

function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {portfolio.map(project => (
                    <PortItem 
                    img= {project.img} 
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio