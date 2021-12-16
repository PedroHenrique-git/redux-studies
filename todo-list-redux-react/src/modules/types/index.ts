import { TaskType } from "../reducers/todoReducer";

export type StateType = {
    tasks: TaskType[];
};

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_COMPLETED_TASK = 'UPDATE_COMPLETED_TASK';