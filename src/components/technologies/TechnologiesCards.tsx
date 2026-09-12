import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnologies } from "../../type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesCardsProps {
    technologiesPromise: Promise<ITechnologies[]>
    stacks: ITechnologies[];
    setStacks: Dispatch<SetStateAction<ITechnologies[]>>
}

const TechnologiesCards = ({ technologiesPromise, stacks, setStacks }: TechnologiesCardsProps) => {
    const technologies = use(technologiesPromise)
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {
                technologies.map((technology, index) => <TechnologyCard technology={technology} stacks={stacks} setStacks={setStacks} key={index}></TechnologyCard>)
            }
        </div>
    )
}

export default TechnologiesCards;