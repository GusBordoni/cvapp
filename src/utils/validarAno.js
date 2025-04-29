const MIN_YEAR = 1900;
const MAX_YEAR = new Date().getFullYear() + 10;

/**
 * Valida um valor digitado como um ano, aceita apenas números, 
 * impede mais que 4 dígitos e garante que o ano seja plausível.
 *
 * @param {Object} params
 * @param {string|number} params.id - ID do item a ser alterado
 * @param {string} params.campo - Nome do campo a ser alterado (ex: 'yearStart')
 * @param {string} params.valorDigitado - Valor digitado no input
 * @param {function} params.handleCampoChange - Função para atualizar o estado
 */
export function handleYearChange({ id, campo, valorDigitado, handleCampoChange }) {
    const onlyNums = valorDigitado.replace(/\D/g, '');

    if (onlyNums.length > 4) return;

    if (onlyNums.length === 4) {
        const year = parseInt(onlyNums, 10);
        if (year < MIN_YEAR || year > MAX_YEAR) return;
    }

    handleCampoChange(id, campo, onlyNums);
}
