export default function addTask ( task, list ) {
    if ( !isTask( task, list ) ) {
        console.log( 'You dont have this task!' )

        list = [...list, task];
    } else{
        console.log('You have this task!')
    }
}

function isTask ( task, list ) {
    console.log( list?.find( ( item ) => item.title == task.title ) );

    // return list.find( ( item ) => item.title == task );
}