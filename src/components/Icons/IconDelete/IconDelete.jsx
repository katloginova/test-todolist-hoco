import { FaRegTrashAlt } from 'react-icons/fa';
import './style.css';

function IconDelete ( props ) {
    const { nameClass, size } = props;

    return (
        <FaRegTrashAlt className={`icon-delete ${nameClass}`} size={ size } />
    )
}

export default IconDelete;