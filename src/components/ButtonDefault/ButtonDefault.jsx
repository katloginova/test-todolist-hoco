import './style.css';

function ButtonDefault ( props ) {
  const { nameClass, onBtnClick, title } = props;

  return (
    <button
      className={ `${ nameClass } btn` }
      onClick={ onBtnClick }>
      { title }
    </button>
  )
}

export default ButtonDefault;