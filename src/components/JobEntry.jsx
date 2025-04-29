import { handleYearChange } from '../utils/validarAno';

export default function JobEntry({
    id,
    position,
    company,
    description,
    jobStart,
    jobEnd,
    isEditando,
    handleCampoChange,
    removeJobEntry
}) {
    return (
        <div className="flex justify-between items-center mb-5">
            <li
                className={`relative ${
                    isEditando ? 'grid grid-cols-6 gap-1' : 'mt-1 list-disc'
                }`}
            >
                <img
                    src="./src/assets/delete.png"
                    alt="Remove entry"
                    // prettier-ignore
                    className={isEditando ?
                        'absolute top-1/3 -left-10 w-7 h-7 saturate-0 opacity-50 hover:saturate-100 hover:opacity-100 cursor-pointer'
                        :
                        'absolute top-0 -left-15 w-7 h-7 saturate-0 opacity-50 hover:saturate-100 hover:opacity-100 cursor-pointer'}
                    onClick={() => removeJobEntry(id)}
                />
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={position}
                        placeholder="Position"
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id,'position',e.target.value)}
                    />
                ) : (
                    <span>
                        <b className="capitalize">{position}</b>
                    </span>
                )}
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={company}
                        placeholder="Company"
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id,'company',e.target.value)}
                    />
                ) : (
                    <span className="text-gray-500 capitalize">
                        {' - '}{company}
                    </span>
                )}
                <br />
                {isEditando ? (
                    <textarea
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white text-[0.85rem] m-1 col-span-4 resize-y overflow-auto min-h-[6rem] max-h-[9rem] font-sans"
                        rows="3"
                        maxLength="400"
                        value={description}
                        placeholder="Description of the job tasks."
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id,'description',e.target.value)}
                    />
                ) : (
                    <span>{description}</span>
                )}
                <br />
                {isEditando ? (
                    <>
                        <input
                            className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                            type="text"
                            value={jobStart}
                            placeholder="1900"
                            // prettier-ignore
                            onChange={(e) => handleYearChange({id, campo: 'jobStart', valorDigitado: e.target.value, handleCampoChange})}
                        />
                        <input
                            className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                            type="text"
                            value={jobEnd}
                            placeholder="2025"
                            // prettier-ignore
                            onChange={(e) => handleYearChange({id, campo: 'jobEnd', valorDigitado: e.target.value, handleCampoChange})}
                        />
                    </>
                ) : (
                    <span className="text-sm text-slate-400 font-[Oswald]">
                        {jobStart} - {jobEnd}
                    </span>
                )}
            </li>
        </div>
    );
}
