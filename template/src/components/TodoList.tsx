import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem';
import { selectTodo } from 'features/todoSlice';
import todo from 'app/models/todo';

const TodoList = () => {
    const todos: todo[] = useSelector(selectTodo);

    return <ul>{todos.map(item => <TodoItem key={item.id} item={item} />)}</ul>;
};

export default TodoList;