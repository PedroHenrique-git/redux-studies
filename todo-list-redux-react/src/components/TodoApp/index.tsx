import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createTask, removeTask, updateTask } from "../../modules/actions/todoActions";
import { StateType } from "../../modules/types";

export default function TodoApp() {
    const dispatch = useDispatch();
    
    const tasks = useSelector((state: StateType) => state.tasks);
    
    const [name, setName] = React.useState('');
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [taskInfo, setTaskInfo] = React.useState<{name: string, index: number}>({
        index: 0,
        name: ''
    });

    const handleCreateTask = () => {
        const task = { name };
        dispatch(createTask(task));
    };

    const handleDeleteTask = (index: number) => {
        dispatch(removeTask(index));
        setName('');
    }

    const handleEditTask = (index: number, newName: string) => {
        dispatch(updateTask(index, newName));
        setIsEditMode(false);
        setName('');
    };

    return (
        <div>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" value={name}/>
                <button onClick={isEditMode ? () => handleEditTask(taskInfo.index, name) : () => handleCreateTask()}>
                    {isEditMode ? 'edit' : 'create'}
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.name}
                        <button onClick={() => handleDeleteTask(index)}>X</button>
                        <button 
                            onClick={() => {
                                setIsEditMode(true);
                                setTaskInfo({ name: task.name, index: index });
                                setName(task.name);
                            }}

                            disabled={isEditMode === true}
                        >
                            edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}