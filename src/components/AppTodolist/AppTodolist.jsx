import { useState } from 'react';
import Context from '../../context';
import FormTodolist from '../FormTodolist/FormTodolist'
import Header from '../Header/Header'
import ListTasks from '../ListTasks/ListTasks';
import SortButtons from '../SortButtons/SortButtons'
import './style.css';

function AppTodolist () {
  const [ listTasks, setListTasks ] = useState([]);

  return (
    <Context.Provider
      value={ { listTasks, setListTasks } } >
      
      <div className="app-todolist">
        <Header />
        <FormTodolist listTasks={ listTasks}/>
        <SortButtons />
        <ListTasks />
      </div>
    </Context.Provider>
  )
}

export default AppTodolist
