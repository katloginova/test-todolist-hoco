import ButtonDefault from '../ButtonDefault/ButtonDefault'
import InputDefault from '../InputDefault/InputDefault'
import './style.css'

function FormTodolist ( props ) {
  const { valueTask, onChangeInput, onAddClick } = props;

  return (
    <div className="todolist-form">

      <InputDefault
        nameClass={ 'todolist-form__input' }
        type={ 'text' }
        valueInput={ valueTask }
        placeholder={ 'What needs to be done?' }
        onChangeInput={ onChangeInput }
      />

      <ButtonDefault
        nameClass={ 'todolist-form__btn' }
        title={ 'add' }
        onBtnClick={ onAddClick }
      />
    </div>
  )
}

export default FormTodolist