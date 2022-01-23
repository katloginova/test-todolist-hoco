import './style.css';

function InputDefault ( props ) {
  const { nameClass, typeInput, valueInput, placeholder, changeInput } = props

  return (
    <input
      className={ `input ${nameClass}` }
      type={ typeInput }
      value={ valueInput }
      placeholder={ placeholder }
      onChange={ changeInput }
    />
  )
}

export default InputDefault
