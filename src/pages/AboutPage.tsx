import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from '@mui/material';

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Typography align='center' variant='h1'>Information Page</Typography>
            <Typography align='center' variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus explicabo laboriosam adipisci minus deleniti suscipit doloribus rerum dolor esse.</Typography>
            <Button onClick={() => navigate('/')}>Go back to Todo List</Button>
        </>
    )
}