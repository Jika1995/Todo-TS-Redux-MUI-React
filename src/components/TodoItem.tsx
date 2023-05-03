import React from 'react';
import { ITodo } from "../interfaces";
import { useAppDispatch } from "../store/hooks";
import { deleteTodo, updateTodo } from "../store/slices/todo.slice";
import { ListItem, Typography, Checkbox, Modal, TextField, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

declare var confirm: (question: string) => boolean

type Props = {
    todo: ITodo
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid lightblue',
    boxShadow: 24,
    p: 4,
};

const TodoItem = ({ todo }: Props) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = React.useState(todo.title);

    //mui 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        const shouldRemove = confirm(
            'Are you sure, you want to delete this activity?'
        );

        if (shouldRemove) {
            dispatch(deleteTodo(id))
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, item: ITodo) => {
        const todoCopy = { ...item }
        todoCopy.completed = event.target.checked
        dispatch(updateTodo(todoCopy))
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (!title) {
                alert('Поле не может быть пустым!')
                return
            }
            const todoCopy = { ...todo }
            todoCopy.title = title
            dispatch(updateTodo(todoCopy))

            handleClose();
        }
    }

    return (
        <>
            <ListItem key={todo.id} style={{ border: '1px solid lightblue', margin: '10px 0', display: 'flex', justifyContent: 'space-between' }} >
                <Checkbox checked={todo.completed} onChange={(event) => handleChange(event, todo)} />
                <Typography
                    sx={todo.completed ? { width: '70%', textDecoration: 'line-through' } : { width: '70%', textDecoration: 'none' }}
                    variant="body1"
                >
                    {todo.title}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '10%' }}>
                    <EditIcon color='info' onClick={handleOpen} />
                    <DeleteIcon onClick={(event) => removeHandler(event, todo.id)} color='error' />
                </div>
            </ListItem>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Enter changed name" variant="outlined" onKeyPress={keyPressHandler} onChange={(e) => setTitle(e.target.value)} value={title} />
                </Box>
            </Modal>
        </>
    )
}

export default TodoItem