import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { ITechnologies } from '../../type';
import { IoMdStar } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface TechnologyProps {
    technology: ITechnologies
    stacks: ITechnologies[]
    setStacks: Dispatch<SetStateAction<ITechnologies[]>>
}

const TechnologyCard = ({ technology, stacks, setStacks, }: TechnologyProps) => {

    const isSelected = stacks.some(stack => stack.name === technology.name);

    const handleAddStack = (stack) => {

        if (isSelected) { 
            toast.warning(`${technology.name} is already added to your stack!`);
            return; 
        }

        toast.success(`${technology.name} Successfully Added!`)
        setStacks([...stacks, technology])

    }


    return (
        <div className='bg-white border border-gray-300 rounded-xl p-3 sm:p-4 space-y-3 w-full'>
            <div className='flex justify-between items-center'>
                <img className='w-9 h-9 sm:w-10 sm:h-10 bg-white border-2 rounded-full border-amber-50 p-1 shrink-0' src={technology.icon} alt={technology.name} />
                <div className='bg-[#D1FAE5] text-[#059669] rounded-2xl py-1 px-2 text-xs sm:text-sm whitespace-nowrap'><span>{technology.badge}</span></div>
            </div>
            <h3 className='text-xl sm:text-2xl font-bold font-primary break-words'>{technology.name}</h3>
            <p className='font-secondary text-sm sm:text-base leading-relaxed text-gray-600'>{technology.description}</p>
            <div className='flex flex-wrap justify-between items-center gap-2 mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm'>
                <div className='bg-[#F1F5F9] rounded-2xl px-2 py-1 whitespace-nowrap'>{technology.category}</div>
                <div className='whitespace-nowrap'>{technology.difficulty}</div>
                <div className='flex items-center gap-1 whitespace-nowrap'><span><IoMdStar /></span> {technology.rating}</div>
            </div>
            <button
                onClick={() => handleAddStack()}
                className={`
                    btn
                    font-bold
                    text-white
                    font-primary
                    py-2
                    w-full
                    border
                    rounded-2xl
                    mt-4
                    cursor-pointer
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-sm
                    sm:text-base
                    ${isSelected ? "active" : "btn-primary"}`}
            >{isSelected && <FaCheck />} {isSelected ? 'Added to Stack' : 'Add to Stack'}</button>
        </div>
    );
};

export default TechnologyCard;