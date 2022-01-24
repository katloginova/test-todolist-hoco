import IconCheck from "../Icons/IconCheck/IconCheck";
import IconDelete from "../Icons/IconDelete/IconDelete";

function TaskItem ( props ) {
    const { id, title, classChecked, onCheckClick, onDeleteClick } = props;

    return (
        <div className="list-tasks__item task" data-id={ id }>
            <IconCheck nameClass={ `task__icon ${ classChecked ? 'done' : '' }` } onCheckClick={ onCheckClick } />
            <div className="task__title">{ title }</div>
            <IconDelete nameClass={ 'task__icon' } size={ 20 } onDeleteClick={ onDeleteClick } />
        </div>
    )
}

export default TaskItem;