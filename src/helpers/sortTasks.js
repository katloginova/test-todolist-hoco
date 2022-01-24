export default function sortTasks ( property, list ) {
    return list.filter( ( item ) => item.isDone === property );
}