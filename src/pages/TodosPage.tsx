import React from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/slices/todo.slice";

export const TodosPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const addHandler = (title: string) => {
    // console.log('Add New Todo', title)
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    dispatch(addTodo(newTodo))

  }

  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '30px 0' }}>
    <TodoForm onAdd={addHandler} />
    <TodoList />
  </div>)
}