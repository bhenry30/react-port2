import React from 'react';
import journey from '../data/journey'
import JourneyItem from './JourneyItem'
import Title from './Title';

function Journey() {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20'>
           <div className='w-full md:w-7/12'>
                <Title>Journey</Title>
                {journey.map(journeyPiece => (
                    <JourneyItem 
                    years= {journeyPiece.years}
                    title={journeyPiece.title}
                    description={journeyPiece.description}
                    />
                    ))}
            
            </div>
        </div>
    )
}

export default Journey