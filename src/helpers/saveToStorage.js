export default function saveToStorage(property, data){
    localStorage.setItem( property, JSON.stringify( data ) );
}