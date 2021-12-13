import { TaskType } from '../reducers/todoReducer';
import * as types from '../types/index';

export const createTask = (task: TaskType) => ({
    type: types.ADD_TASK,
    payload: task 
});

export const removeTask = (index: number) => ({
    type: types.REMOVE_TASK,
    index
});

export const updateTask = (index: number, name: string) => ({
    type: types.UPDATE_TASK, 
    index, 
    payload: name
});