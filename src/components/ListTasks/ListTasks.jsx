import TaskItem from './TaskItem';
import './style.css';

function ListTasks () {
    return (
        <div className='todolist-list list-tasks'>
            <TaskItem title={ 'title1' } />
            <TaskItem title={ 'title2' } />

        </div>
    )
}
export default ListTasks;