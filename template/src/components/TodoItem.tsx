import React from 'react'
import { useDispatch } from 'react-redux';
import { removeChecked } from 'features/todoSlice';
import todo from 'app/models/todo';

function TodoItem({ item }: { item: todo }) {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={item.checked}
                onChange={() => dispatch(removeChecked(item.id))} />
            <span>{item.text}</span>
        </li>
    );
};

export default TodoItem;