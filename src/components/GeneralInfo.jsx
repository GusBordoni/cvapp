import { useState } from 'react';
import BotaoEditar from './BotaoEditar';
import { initialGeneralInfo } from '../data/initialData';

export default function GeneralInfo() {
    const [isEditando, setIsEditando] = useState(false);
    const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);

    function handleEdit() {
        setIsEditando(!isEditando);
    }

    function handleInfoChange(campo, valor) {
        setGeneralInfo((prev) => ({ ...prev, [campo]: valor }));
    }

    return (
        <div
            className={`flex flex-col relative hover:bg-indigo-50 p-4 rounded-lg ${
                isEditando ? 'gap-2.5' : 'gap-1'
            }`}
        >
            <BotaoEditar isEditando={isEditando} onClick={handleEdit} />

            {isEditando ? (
                <input
                    id="fullName"
                    type="text"
                    value={generalInfo.fullName}
                    className="border border-gray-400 rounded-lg p-2 w-2/3 bg-white font-sans text-xl font-bold self-center text-center"
                    onChange={(e) =>
                        handleInfoChange('fullName', e.target.value)
                    }
                    aria-label="Full Name"
                />
            ) : (
                <h1 className="text-gray-900 text-4xl font-bold place-self-center font-[Oswald] mb-10">
                    {generalInfo.fullName}
                </h1>
            )}

            {isEditando ? (
                <p className="text-basic">
                    <label htmlFor="address">
                        <b>Address:</b>
                    </label>{' '}
                    <input
                        id="address"
                        type="text"
                        value={generalInfo.address}
                        className="border border-gray-400 rounded-lg p-1.5 grow w-1/3 bg-white font-sans text-base"
                        onChange={(e) =>
                            handleInfoChange('address', e.target.value)
                        }
                        aria-label="Address"
                    />
                </p>
            ) : (
                <p className="text-basic">
                    <b>Address:</b> {generalInfo.address}
                </p>
            )}

            {isEditando ? (
                <p className="text-basic">
                    <label htmlFor="phone">
                        <b>Phone:</b>
                    </label>{' '}
                    <input
                        id="phone"
                        type="text"
                        value={generalInfo.phone}
                        className="border border-gray-400 rounded-lg p-1.5 grow w-1/3 bg-white font-sans text-base"
                        onChange={(e) =>
                            handleInfoChange('phone', e.target.value)
                        }
                        aria-label="Phone"
                    />{' '}
                    <label htmlFor="messagePhone">
                        <b>Message Phone:</b>
                    </label>{' '}
                    <input
                        id="messagePhone"
                        type="text"
                        value={generalInfo.messagePhone}
                        className="border border-gray-400 rounded-lg p-1.5 grow w-1/3 bg-white font-sans text-base"
                        onChange={(e) =>
                            handleInfoChange('messagePhone', e.target.value)
                        }
                        aria-label="Message Phone"
                    />
                </p>
            ) : (
                <p className="text-basic">
                    <b>Phone:</b> {generalInfo.phone} <b>Message Phone:</b>{' '}
                    {generalInfo.messagePhone}
                </p>
            )}

            {isEditando ? (
                <p className="text-basic">
                    <label htmlFor="email">
                        <b>Email:</b>
                    </label>{' '}
                    <input
                        id="email"
                        type="text"
                        value={generalInfo.email}
                        className="border border-gray-400 rounded-lg p-1.5 grow w-1/3 bg-white font-sans text-base"
                        onChange={(e) =>
                            handleInfoChange('email', e.target.value)
                        }
                        aria-label="Email"
                    />
                </p>
            ) : (
                <p className="text-basic">
                    <b>Email:</b> {generalInfo.email}
                </p>
            )}

            {isEditando ? (
                <p className="text-basic">
                    <label htmlFor="age">
                        <b>Age:</b>
                    </label>{' '}
                    <input
                        id="age"
                        type="text"
                        value={generalInfo.age}
                        className="border border-gray-400 rounded-lg p-1.5 grow w-12 bg-white font-sans text-base"
                        onChange={(e) =>
                            handleInfoChange('age', e.target.value)
                        }
                        aria-label="Age"
                    />{' '}
                    years old
                </p>
            ) : (
                <p className="text-basic">
                    <b>Age:</b> {generalInfo.age} years old
                </p>
            )}
        </div>
    );
}
