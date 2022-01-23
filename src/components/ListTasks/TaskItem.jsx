import IconCheck from "../Icons/IconCheck/IconCheck";
import IconDelete from "../Icons/IconDelete/IconDelete";

function TaskItem (props) {
    const { title } = props;

    return (
        <div className="list-tasks__item task">
            <IconCheck nameClass={ 'task__icon'}/>
            <div className="task__title">{ title }</div>
            <IconDelete nameClass={ 'task__icon' } size={ 20 }/>
        </div>
    )
}

export default TaskItem;