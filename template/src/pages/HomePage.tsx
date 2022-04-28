import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from 'components/TodoList';

const HomePage = () => {
    return (
        <Container className='mt-5 py-4'>
            <h1>Home Page</h1>
            <TodoList />
        </Container>
    );
};

export default HomePage;