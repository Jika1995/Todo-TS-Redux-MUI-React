import React from "react";
import { useAppSelector } from "../store/hooks";
import { List } from '@mui/material';
import TodoItem from './TodoItem';

export const TodoList: React.FC = () => {
    const todos = useAppSelector((state) => state.todos.data);

    if (todos.length === 0) {
        return <p className="center">There is no activities to do yet! </p>
    }

    return (
        <List sx={{ width: '40%', margin: 'auto' }}>
            {todos.map(todo => {
                return (
                    <TodoItem todo={todo} />
                )
            })}
        </List>
    )
}

