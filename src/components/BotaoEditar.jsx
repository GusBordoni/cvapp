export default function BotaoEditar({ isEditando, onClick, className = '' }) {
    const iconPath = isEditando
        ? './src/assets/accept.png'
        : './src/assets/edit.png';

    return (
        <img
            src={iconPath}
            alt={isEditando ? 'Save' : 'Edit'}
            title={isEditando ? 'Save' : 'Edit'}
            onClick={onClick}
            className={`absolute top-0 right-0 w-6 h-6 m-2 cursor-pointer saturate-0 hover:saturate-100 ${className}`}
        />
    );
}
