import { createSlice } from '@reduxjs/toolkit';
import todo from 'app/models/todo';
import { RootState } from 'app/store';

export interface TodoState {
    value: todo[];
}

const initialState: TodoState = {
    value: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push({
                text: action.payload,
                id: Date.now(),
                checked: false
            })
        },
        removeChecked: (state, action) => {
            state.value = state.value.map(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked;
                }
                return item;
            });

            state.value = state.value.filter(item => !item.checked);
        }
    }
});

export const { addTodo, removeChecked } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todos.value;

export default todoSlice.reducer;