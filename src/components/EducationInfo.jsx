import { useState } from 'react';
import { initialEducationEntries } from '../data/initialData';
import EducationEntry from './EducationEntry';
import BotaoEditar from './BotaoEditar';
import getHigherID from '../utils/getHigherID'

export default function EducationInfo() {
    const [eduEntries, setEduEntries] = useState(initialEducationEntries);
    const [isEditando, setIsEditando] = useState(false);

    function handleEdit() {
        setIsEditando(!isEditando);
    }

    function handleAddEntry(deg = '', uni = '', yS = '', yE = '') {
        const newID = getHigherID(eduEntries) + 1;
        const newEntry = {
            id: newID,
            degree: deg,
            university: uni,
            yearStart: yS,
            yearEnd: yE,
        };
        setEduEntries([...eduEntries, newEntry]);
    }
 
    function handleRemoveEntry(id) {
        const removedEduEntries = eduEntries.filter(entry => entry.id !== id)
        setEduEntries(removedEduEntries);
    }
    

    function handleCampoChange(id, campo, novoValor) {
        setEduEntries((prevEduEntries) =>
            prevEduEntries.map((entry) =>
                entry.id === id ? { ...entry, [campo]: novoValor } : entry
            )
        );
    }

    return (
        <div className="flex flex-row pt-3 pb-3 hover:bg-gray-100 pl-4 rounded-lg">
            <div className="w-[180px] shrink-0">
                <h2 className="text-2xl font-bold uppercase text-gray-400 font-[Oswald]">
                    Education
                </h2>
            </div>
            <div className="relative grow pr-7">
                <BotaoEditar isEditando={isEditando} onClick={handleEdit} />
                <ul className="pl-0">
                    {eduEntries.map((degree) => (
                        <EducationEntry
                            key={`edu-${degree.id}`}
                            id={degree.id}
                            degree={degree.degree}
                            university={degree.university}
                            yearStart={degree.yearStart}
                            yearEnd={degree.yearEnd}
                            isEditando={isEditando}
                            handleCampoChange={handleCampoChange}
                            handleRemoveEntry={handleRemoveEntry}
                        />
                    ))}
                    {isEditando ? (
                        <img
                            src="./src/assets/plus.png"
                            alt="Add another entry."
                            className="relative bottom-0 left-0 w-7 h-7 saturate-0 hover:saturate-100 cursor-pointer mt-4"
                            onClick={() => handleAddEntry()}
                        />
                    ) : null}
                </ul>
            </div>
        </div>
    );
}
