import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import todo from 'app/models/todo';
import TodoItem from 'components/TodoItem';
import { selectTodo } from 'features/todoSlice';

const TodoList = () => {
    const todos: todo[] = useSelector(selectTodo);

    return (
        <ListGroup variant='flush'>
            {todos.map(item => <TodoItem key={item.id} item={item} />)}
        </ListGroup>
    );
};

export default TodoList;