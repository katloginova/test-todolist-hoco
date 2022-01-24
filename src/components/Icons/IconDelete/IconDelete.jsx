import { FaRegTrashAlt } from 'react-icons/fa';
import './style.css';

function IconDelete ( props ) {
    const { nameClass, size, onDeleteClick } = props;

    return (
        <div className={ `icon-delete ${ nameClass }` } onClick={ onDeleteClick }>
            <FaRegTrashAlt size={ size } />
        </div>
    )
}

export default IconDelete;