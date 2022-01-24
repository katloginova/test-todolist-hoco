import TaskItem from './TaskItem';
import './style.css';

function ListTasks ( props ) {
    const { listTasks, onCheckClick, onDeleteClick } = props;

    return ( listTasks.length > 0 ) && (
        <div className='todolist-list list-tasks'>
            { listTasks.map( ( item ) =>
                <TaskItem
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    classChecked={ item.isDone }
                    onCheckClick={ onCheckClick }
                    onDeleteClick={ onDeleteClick }
                />
            ) }

        </div>
    )
}
export default ListTasks;