import './style.css';

function ButtonDefault ( props ) {
  const { nameClass, click, title } = props;

  return (
    <button
      className={ `${ nameClass} btn` }
      onClick={ click }>
      { title }
    </button>
  )
}

export default ButtonDefault;