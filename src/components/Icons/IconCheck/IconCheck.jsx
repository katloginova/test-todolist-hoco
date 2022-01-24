import './style.css';

function IconCheck ( props ) {
    const { nameClass, onCheckClick } = props;

    return (
        <div className={ `icon-check ${ nameClass }` } onClick={ onCheckClick }></div>
    )
}

export default IconCheck;