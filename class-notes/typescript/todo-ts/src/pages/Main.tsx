import React from 'react'
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddTodoComp from '../components/AddTodoComp';
import TodoList from '../components/TodoList';

const Main = () => {
  return (
    <Container>
      <Typography color="error" variant='h2' component={"h1"} align='center' mt={3}>Todo App with Typescript</Typography>
      <AddTodoComp />
      <TodoList/>
    </Container>
  );
}

export default Main