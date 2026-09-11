import React, { type SetStateAction } from 'react';
import type { ITechnologies } from '../../type';

interface TechnologiesStackProps {
    stacks: ITechnologies[]
    setStacks: Dispatch<SetStateAction<ITechnologies[]>>
}

const TechnologiesStack = ({ stacks }) => {
    console.log(stacks);

    const handleRemoveStack = (stack) => {
        
    }
    return (
        <div>
            <h2>Your Stack</h2>
            <p>No technologies selected yet.</p>

            <div className='border border-gray-100 rounded-2xl mt-4 p-3 '>
                {
                    stacks.length === 0
                        ? <div className='font-secondary text-center'>Your Stack is Empty</div>
                        : <div>
                            <div>
                                {}
                            </div>
                            <button onClick={()=> handleRemoveStack(stack)} className='text-3xl'>X</button>
                        </div>
                }
            </div>

        </div>
    );
};

export default TechnologiesStack;