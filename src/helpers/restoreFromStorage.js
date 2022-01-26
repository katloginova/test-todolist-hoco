export default function restoreFromStorage (property) {
    return JSON.parse( localStorage.getItem( property ) );
}