import { useState } from 'react';
import addNewTask from '../../helpers/addNewTask';
import changeStateTask from '../../helpers/changeStateTask';
import deleteTask from '../../helpers/deleteTask';
import getIdElem from '../../helpers/getIdElem';
import isEmpty from '../../helpers/isEmpty';
import sortTasks from '../../helpers/sortTasks';
import FormTodolist from '../FormTodolist/FormTodolist'
import Header from '../Header/Header'
import ListTasks from '../ListTasks/ListTasks';
import SortButtons from '../SortButtons/SortButtons'
import './style.css';

function AppTodolist () {
  const [ valueTask, setValueTask ] = useState( '' );
  let [ listTasks, setListTasks ] = useState( [] );
  let [ listShownTasks, setListShownTasks ] = useState( [] );

  const titleBtns = [ 'all', 'done', 'todo' ];


  function onChangeInput ( e ) {
    setValueTask( e.target.value );
  }

  function onAddClick () {
    if ( !isEmpty( valueTask ) )
    {
      listTasks = addNewTask( valueTask, listTasks );
      setListTasks( listTasks );
      setListShownTasks( listTasks );
    }
    setValueTask( '' );
  }

  function onCheckClick ( e ) {
    const idElem = getIdElem( e.target, '.task' );
    listTasks = changeStateTask( idElem, listTasks );
    setListTasks( listTasks );
    setListShownTasks( listTasks );
  }

  function onDeleteClick ( e ) {
    const idElem = getIdElem( e.target, '.task' );
    listTasks = deleteTask( idElem, listTasks );
    setListTasks( listTasks );
    setListShownTasks( listTasks );
  }

  function onBtnSortClick ( e ) {
    const titleBtn = e.target.innerHTML;

    switch ( true )
    {
      case ( titleBtn === 'all' ):
        setListShownTasks( listTasks );
        break;
      case ( titleBtn === 'done' ):
        listShownTasks = sortTasks( true, listTasks );
        setListShownTasks( listShownTasks );
        break;
      case ( titleBtn === 'todo' ):
        listShownTasks = sortTasks( false, listTasks );
        setListShownTasks( listShownTasks );
        break;
      default:
        break;
    }

  }

  return (
    <div className="app-todolist">
      <Header />
      <FormTodolist
        valueTask={ valueTask }
        onChangeInput={ onChangeInput }
        onAddClick={ onAddClick }
      />
      <SortButtons
        titleBtns={ titleBtns }
        onBtnClick={ onBtnSortClick }
      />
      <ListTasks
        listTasks={ listShownTasks }
        onCheckClick={ onCheckClick }
        onDeleteClick={ onDeleteClick }
      />
    </div>
  )
}

export default AppTodolist