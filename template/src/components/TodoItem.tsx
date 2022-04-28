import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import todo from 'app/models/todo';
import { removeChecked } from 'features/todoSlice';

function TodoItem({ item }: { item: todo }) {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item>
            <input
                type='checkbox'
                checked={item.checked}
                onChange={() => dispatch(removeChecked(item.id))} />
            {' '}
            <span>{item.text}</span>
        </ListGroup.Item>
    );
};

export default TodoItem;