import './style.css';

function InputDefault ( props ) {
  const { nameClass, typeInput, valueInput, placeholder, onChangeInput } = props

  return (
    <input
      className={ `input ${ nameClass }` }
      type={ typeInput }
      value={ valueInput }
      placeholder={ placeholder }
      onChange={ onChangeInput }
    />
  )
}

export default InputDefault
