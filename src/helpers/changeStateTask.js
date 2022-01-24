export default function changeStateTask ( id, list ) {
   return list.map( ( item ) => (+item.id !== +id) ? item : { ...item, isDone: !item.isDone } );
}