export default function addNewTask ( titleTask, list ) {
    if( !isTask( titleTask, list ) ) {
        const newTaskItem = createTaskItem( titleTask );
        list.push( newTaskItem );
    }
    else{
        console.log( 'You have this task' );
    }
    return list;
}

function createTaskItem ( titleTask ) {
    return {
        id: Date.now(),
        title: titleTask,
        isDone: false,
    };
}

function isTask ( taskTitle, list ) {
    return list?.some( ( item ) => item.title === taskTitle );
}