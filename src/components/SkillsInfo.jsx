import { useState } from 'react';
import { initialSkillEntries } from '../data/initialData';
import SkillEntry from './SkillEntry';
import BotaoEditar from './BotaoEditar';
import getHigherID from '../utils/getHigherID';

export default function SkillsInfo() {
    const [skillsEntries, setSkillsEntries] = useState(initialSkillEntries);
    const [isEditando, setIsEditando] = useState(false);

    function handleEdit() {
        setIsEditando(!isEditando);
    }

    function handleCampoChange(id, campo, valor) {
        setSkillsEntries((prevEntries) =>
            prevEntries.map((entry) => {
                if (entry.id === id) {
                    return {
                        ...entry,
                        [campo]: valor,
                    };
                } else {
                    return entry;
                }
            })
        );
    }

    function handleRemoveSkill(id) {
        setSkillsEntries(skillsEntries.filter((entry) => entry.id !== id));
    }

    function handleAddSkill() {
        const newSkill = {
            id: getHigherID(skillsEntries) + 1,
            skill: '',
            level: '',
            additionalInfo: '',
        };
        setSkillsEntries([...skillsEntries, newSkill]);
    }

    return (
        <div className="flex flex-row pt-3 pb-3 hover:bg-indigo-50 pl-4 rounded-lg">
            <div className="w-[180px] shrink-0">
                <h2 className="text-2xl font-bold uppercase text-gray-400 font-[Oswald]">
                    Other
                    <br />
                    Skills
                </h2>
            </div>
            <div className="relative grow pr-7">
                <BotaoEditar isEditando={isEditando} onClick={handleEdit} />
                <ul className="pl-0">
                    {skillsEntries.map((entry) => (
                        <SkillEntry
                            key={`skl-${entry.id}`}
                            id={entry.id}
                            skill={entry.skill}
                            level={entry.level}
                            additionalInfo={entry.additionalInfo}
                            isEditando={isEditando}
                            handleCampoChange={handleCampoChange}
                            handleRemoveSkill={handleRemoveSkill}
                            handleAddSkill={handleAddSkill}
                        />
                    ))}
                    {isEditando ? (
                        <img
                            src="./src/assets/plus.png"
                            alt="Add another entry."
                            className="relative bottom-0 left-0 w-7 h-7 saturate-0 hover:saturate-100 cursor-pointer mt-4"
                            onClick={() => handleAddSkill()}
                        />
                    ) : null}
                </ul>
            </div>
        </div>
    );
}
