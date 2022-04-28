import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from 'components/TodoItem';
import {
    addTodo,
    selectTodo,
} from 'features/todoSlice';
import todo from 'app/models/todo';

const TodoList = () => {
    const todos: todo[] = useSelector(selectTodo);
    const dispatch = useDispatch();

    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = () => {
        if (!text.current)
            return;

        dispatch(addTodo(text.current.value));
        text.current.value = '';
    }

    return (
        <>
            <ul>{todos.map(item => <TodoItem key={item.id} item={item} />)}</ul>
            <input type='text' ref={text} />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
};

export default TodoList;