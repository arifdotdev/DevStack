import React, { type Dispatch, type SetStateAction } from 'react';
import type { ITechnologies } from '../../type';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

interface TechnologiesStackProps {
    stacks: ITechnologies[]
    setStacks: Dispatch<SetStateAction<ITechnologies[]>>
    setIsSelected: Dispatch<SetStateAction<boolean>>
}

const TechnologiesStack = ({ stacks, setStacks }: TechnologiesStackProps) => {

    const handleRemoveStack = (stack: ITechnologies) => {
        const restStack = stacks.filter(s => s.name !== stack.name);
        setStacks(restStack)
        toast.error(`${stack.name} deleted!`)
    }
    const handleRemoveAllStacks = () => {
        setStacks([])
        toast.error('Removed All Stacks!')
    }

    return (
        <div className='border border-gray-300 rounded-2xl p-5 '>
            <h2 className='text-2xl font-primary font-bold'>Your Stack</h2>
            {stacks.length === 0 ? <p>No technologies selected yet.</p> : <p>{stacks.length} Technology Selected</p>}

            <div className='border border-gray-100 rounded-2xl mt-4 p-3 '>
                {
                    stacks.length === 0
                        ? <div className='font-secondary text-center'>Your Stack is Empty</div>
                        : <div className=' gap-3'>
                            {
                                stacks.map(stack => <div className='flex justify-between items-center gap-3 border border-gray-300 py-3 px-2 rounded-2xl mb-3 '>
                                    <div className='flex justify-between items-center gap-3'>
                                        <img className='w-10 h-10 rounded-full border shadow p-1 border-gray-200' src={stack.icon} alt={stack.name} />
                                        <div>
                                            <h4 className='font-primary text-sm font-bold '>{stack.name}</h4>
                                            <p className='font-secondary text-sm font-light'>{stack.category}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemoveStack(stack)} className='text-3xl text-orange-400 cursor-pointer '><MdDelete /></button>
                                </div>)
                            }
                            <button onClick={handleRemoveAllStacks} className='btn border-2 border-orange-300-400 bg-transparent rounded w-full'>Remove All Stack</button>
                        </div>
                }
            </div>

        </div>
    );
};

export default TechnologiesStack;