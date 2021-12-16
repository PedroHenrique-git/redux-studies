
import * as types from '../types/index';

export type TaskType = {
    name: string;
    completed: boolean;
};

let tasks: TaskType[] = [];
const tasksOnLocalStorage = localStorage.getItem('tasks'); 

if( tasksOnLocalStorage ) {
    const values: {
        tasks: TaskType[]  
    } = JSON.parse(tasksOnLocalStorage);

    tasks = values.tasks;
}

const initialState: TaskType[] =  tasks || [];

type actionType = {
    type: string;
    index?: number;
    payload?: TaskType | string; 
};

export default function todoReducer(state = initialState, action: actionType) {
    switch(action.type) {
        case types.ADD_TASK: return state.concat(action.payload as TaskType);

        case types.REMOVE_TASK: return state.filter((_, index) => index !== action.index);

        case types.UPDATE_TASK: return state.map((task, index) => {
            if( index === action.index ) {
                task.name = String(action.payload);
                return task;
            }
            return task;
        });

        case types.UPDATE_COMPLETED_TASK: return state.map((task, index) => {
            if( index === action.index ) {
                task.completed = !task.completed;
                return task;
            }
            return task;
        });
        
        default: return state;
    }
} 