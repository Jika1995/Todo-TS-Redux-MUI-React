import { TextField } from '@mui/material'
import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void //ничего не возвращает
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState('');

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (!title) {
                alert('Поле не может быть пустым!')
                return
            }

            props.onAdd(title);
            setTitle('');
        }
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Enter activity name" variant="outlined" onKeyPress={keyPressHandler} onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
    )
}