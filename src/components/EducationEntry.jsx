import React from 'react';
import { handleYearChange } from '../utils/validarAno';

export default function EducationEntry({
    id,
    degree,
    university,
    yearStart,
    yearEnd,
    isEditando,
    handleCampoChange,
    handleRemoveEntry
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
                    onClick={() => handleRemoveEntry(id)}
                />
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={degree}
                        // prettier-ignore
                        onChange={(e) =>
                            handleCampoChange(id, 'degree', e.target.value)
                        }
                    />
                ) : (
                    <span>
                        <b className="capitalize">{degree} </b>
                    </span>
                )}
                {isEditando ? (
                    <input
                        className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                        type="text"
                        value={university}
                        onChange={(e) =>
                            handleCampoChange(id, 'university', e.target.value)
                        }
                    />
                ) : (
                    <span className="text-gray-500 capitalize">
                        - {university}
                    </span>
                )}

                <br />
                {isEditando ? (
                    <>
                        <input
                            className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                            type="text"
                            value={yearStart}
                            // prettier-ignore
                            onChange={(e) => handleYearChange({id, campo: 'yearStart', valorDigitado: e.target.value, handleCampoChange})}
                        />
                        <input
                            className="border borderborder border-gray-400 rounded-lg p-2 bg-white font-sans text-sm m-1 col-span-2"
                            type="text"
                            value={yearEnd}
                            // prettier-ignore
                            onChange={(e) => handleYearChange({id, campo: 'yearEnd', valorDigitado: e.target.value, handleCampoChange})}
                        />
                    </>
                ) : (
                    <span className="text-sm text-slate-400 font-[Oswald]">
                        {yearStart} - {yearEnd}
                    </span>
                )}
            </li>
        </div>
    );
}
