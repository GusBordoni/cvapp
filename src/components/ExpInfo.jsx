import JobEntry from './JobEntry';
import { initialJobEntries } from '../data/initialData';
import { useState } from 'react';
import BotaoEditar from './BotaoEditar';
import getHigherID from '../utils/getHigherID';

export default function ExpInfo() {
    const [jobEntries, setJobEntries] = useState(initialJobEntries);
    const [isEditando, setIsEditando] = useState(false);

    function handleCampoChange(id, campo, novoValor) {
        setJobEntries((prevJobEntry) =>
            prevJobEntry.map((entry) =>
                entry.id === id ? { ...entry, [campo]: novoValor } : entry
            )
        );
    }

    function handleEdit() {
        setIsEditando(!isEditando);
    }

    function removeJobEntry(id) {
        setJobEntries(jobEntries.filter((entry) => entry.id !== id));
    }

    function addJobEntry() {
        let newJobEntry = {
            id: getHigherID(jobEntries) + 1,
            position: '',
            company: '',
            description: '',
            jobStart: '',
            jobEnd: '',
        };
        setJobEntries([...jobEntries, newJobEntry]);
    }

    return (
        <div className="flex flex-row pt-3 pb-3 hover:bg-gray-100 pl-4 rounded-lg">
            <div className="w-[180px] shrink-0">
                <h2 className="text-2xl font-bold uppercase text-gray-400 font-[Oswald]">
                    Work<br/>Experience
                </h2>
            </div>
            <div className="relative grow pr-7">
                <BotaoEditar isEditando={isEditando} onClick={handleEdit} />
                <ul className="pl-0">
                    {jobEntries.map((entry) => (
                        <JobEntry
                            key={`job-${entry.id}`}
                            id={entry.id}
                            position={entry.position}
                            company={entry.company}
                            description={entry.description}
                            jobStart={entry.jobStart}
                            jobEnd={entry.jobEnd}
                            isEditando={isEditando}
                            handleCampoChange={handleCampoChange}
                            removeJobEntry={removeJobEntry}
                        />
                    ))}
                    {isEditando ? (
                        <img
                            src="./src/assets/plus.png"
                            alt="Add another entry."
                            className="relative bottom-0 left-0 w-7 h-7 saturate-0 hover:saturate-100 cursor-pointer mt-4"
                            onClick={() => addJobEntry()}
                        />
                    ) : null}
                </ul>
            </div>
        </div>
    );
}
