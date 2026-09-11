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
    console.log(technologies);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {
                technologies.map((technology, index) => <TechnologyCard technology={technology} stacks={stacks} setStacks = { setStacks } key={index}></TechnologyCard>)
            }
        </div>
    )
}

export default TechnologiesCards;