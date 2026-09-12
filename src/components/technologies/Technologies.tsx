import React, { Suspense, useState } from 'react';
import TechnologiesCards from './TechnologiesCards';
import TechnologiesStack from './TechnologiesStack';
import type { ITechnologies } from '../../type';



const technologiesFetch = async ():Promise<ITechnologies[]> => {
    const res = await fetch('/data.json')
    const data = await res.json()
    return data;
}


const Technologies = () => {
    const [technologiesPromise] = useState(()=> technologiesFetch()) 

    const [stacks, setStacks] = useState([])

    return (
        <div className='container'>
            <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl
                font-primary'>Explore the <span className='bg-gradient-to-r from-[#ff6b1a] to-[#ec4899] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='font-secondary mt-2 text-sm sm:text-base text-gray-600'>Pick one technology per category to build your ideal stack.</p>

            <div className='flex flex-col md:flex-row gap-6 lg:gap-10 mt-8 sm:mt-10'>
                <div className='w-full md:w-7/12 lg:w-9/12'>
                    <Suspense fallback={<div className="flex justify-center"><span className="loading loading-bars loading-sm"></span></div>}>
                        <TechnologiesCards technologiesPromise={technologiesPromise} stacks={stacks} setStacks={setStacks} ></TechnologiesCards>
                    </Suspense>
                </div>
                <div className='w-full md:w-5/12 lg:w-3/12'>
                    <TechnologiesStack stacks={stacks} setStacks={setStacks} ></TechnologiesStack>
                </div>
            </div>
        </div>
    );
};

export default Technologies;