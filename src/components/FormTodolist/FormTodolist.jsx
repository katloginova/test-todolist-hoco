import { useContext, useState } from 'react'
import Context from '../../context';
import addTask from '../../helpers/addTask';
import createTaskItem from '../../helpers/createTaskItem';
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import InputDefault from '../InputDefault/InputDefault'
import './style.css'

function FormTodolist () {
  const { listTask, setListTask }=useContext( Context );
  
  const [ valueTask, setValueTask ] = useState( '' );

  function changeInput(e) {
    setValueTask( e.target.value );
  }

  function addNewTask () {
    const newTaskItem=createTaskItem( valueTask );
    addTask( newTaskItem, listTask );

    console.log( newTaskItem );
  }

  return (
    <div className="todolist-form">

      <InputDefault
        nameClass={ 'todolist-form__input' }
        type={ 'text' }
        valueInput={ valueTask }
        placeholder={ 'What needs to be done?' }
        changeInput={ changeInput }
      />

      <ButtonDefault
        nameClass={ 'todolist-form__btn' }
        title={ 'add' }
        click={addNewTask}
      />
    </div>
  )
}

export default FormTodolist