import React, { useRef } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import TodoList from 'components/TodoList';
import { addTodo } from 'features/todoSlice';

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
            <h1>Home</h1>
            <Row>
                <Col
                    xs={{ span: 10, offset: 1 }}
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
            <Row className='mt-5'>
                <Col
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 6, offset: 3 }}
                >
                    <TodoList />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;