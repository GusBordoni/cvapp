import { useState } from 'react';
import BotaoEditar from './BotaoEditar';

export default function GoalsInfo() {
    const [isEditando, setIsEditando] = useState(false);
    const [goalDescription, setGoalDescription] = useState(
        `Get this job. Something, something, I hope it's a good description of how bad you want this job.`
    );

    function handleEdit() {
        setIsEditando(!isEditando);
    }

    function handleDescriptionChange(e) {
        setGoalDescription(e.target.value);
    }

    return (
        <div className="flex flex-col pt-6 pb-6 pr-7 pl-4 relative hover:bg-gray-100 rounded-lg">
            <BotaoEditar isEditando={isEditando} onClick={handleEdit} />
            <div>
                <h2 className="text-gray-900 text-2xl font-bold font-[Oswald] uppercase">
                    Goals
                </h2>
            </div>
            <ul className="ml-12 mt-2">
                {isEditando ? (
                    <textarea
                        value={goalDescription}
                        onChange={handleDescriptionChange}
                        className="border border-gray-400 rounded-lg p-2 grow w-full bg-white font-sans text-sm"
                    ></textarea>
                ) : (
                    <li className="list-disc">{goalDescription}</li>
                )}
            </ul>
        </div>
    );
}
