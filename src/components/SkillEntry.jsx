export default function SkillEntry({
    id,
    skill,
    level,
    additionalInfo = '',
    isEditando,
    handleCampoChange,
    handleRemoveSkill,
}) {
    return (
        <div
            className={`flex justify-between items-center ${
                isEditando ? 'mb-5' : 'mb-1'
            }`}
        >
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
                    onClick={() => handleRemoveSkill(id)}
                />
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={skill}
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id, 'skill',e.target.value)}
                    />
                ) : (
                    <span>
                        <b className="capitalize">{skill}</b>
                    </span>
                )}{' '}
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={level}
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id, 'level',e.target.value)}
                    />
                ) : (
                    <span className="text-gray-500 capitalize">- {level}</span>
                )}
                <br />
                {isEditando ? (
                    <textarea
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white text-[0.85rem] m-1 col-span-4 resize-y overflow-auto min-h-[6rem] max-h-[9rem] font-sans"
                        rows="3"
                        maxLength="400"
                        placeholder="Additional info. (Optional)"
                        value={additionalInfo}
                        // prettier-ignore
                        onChange={(e) => handleCampoChange(id, 'additionalInfo',e.target.value)}
                    />
                ) : (
                    <span>{additionalInfo}</span>
                )}
            </li>
        </div>
    );
}
