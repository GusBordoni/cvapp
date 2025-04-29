export default function getHigherID(array) {
    const allIDs = array.map((item) => item.id);
    return allIDs.length > 0 ? Math.max(...allIDs) : -1;
}