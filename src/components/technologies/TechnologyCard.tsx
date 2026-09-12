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
        <div className='bg-white border border-gray-300 rounded-xl p-3 space-y-3 '>
            <div className='flex justify-between items-center'>
                <img className='w-10 h-10 bg-white border-2 rounded-full border-amber-50 text-shadow-zinc-200 p-1 ' src={technology.icon} alt={technology.name} />
                <div className='bg-[#D1FAE5] text-[#059669] rounded-2xl py-1 px-2'><span>{technology.badge}</span></div>
            </div>
            <h3 className='text-2xl font-bold font-primary'>{technology.name}</h3>
            <p className='font-secondary'>{technology.description}</p>
            <div className='flex justify-between items-center mt-3 pt-2 border-t-1 border-gray-100'>
                <div className='bg-[#F1F5F9] rounded-2xl px-2 py-1'>{technology.category}</div>
                <div>{technology.difficulty}</div>
                <div className='flex items-center'><span><IoMdStar /></span> {technology.rating}</div>
            </div>
            <button
                onClick={() => handleAddStack()}
                className={`btn font-bold text-white font-primary py-2 w-full border rounded-2xl mt-5 cursor-pointer flex items-center justify-center gap-2 ${isSelected ? "active" : "btn-primary"}`}
            >{isSelected && <FaCheck />} {isSelected ? 'Added to Stack' : 'Add to Stack'}</button>
        </div>
    );
};

export default TechnologyCard;