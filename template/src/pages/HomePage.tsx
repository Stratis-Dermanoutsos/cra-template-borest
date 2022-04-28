import React, { useRef } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import TodoList from 'components/TodoList';
import { addTodo } from 'features/todoSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = () => {
        if (!text.current || !text.current.value)
            return;

        dispatch(addTodo(text.current.value));
        text.current.value = '';
    }

    return (
        <Container className='mt-5 py-4'>
            <h1>Home Page</h1>
            <Row>
                <Col
                    xs={{ span: 8, offset: 2 }}
                    md={{ span: 6, offset: 3 }}
                >
                    <FloatingLabel
                        controlId='floatingInput'
                        label='I have to ...'
                        className='mb-3'
                    >
                        <Form.Control type='text' ref={text} placeholder='Add todo' />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button size='lg' variant='primary' onClick={handleSubmit}>Add todo</Button>
                </Col>
            </Row>
            <TodoList />
        </Container>
    );
};

export default HomePage;