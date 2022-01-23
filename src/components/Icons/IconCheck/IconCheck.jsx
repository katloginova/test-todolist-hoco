import './style.css';

function IconCheck ( props ) {
    const { nameClass } = props;

    return (
        <div className={`icon-check ${nameClass}`}></div>
    )
}

export default IconCheck;