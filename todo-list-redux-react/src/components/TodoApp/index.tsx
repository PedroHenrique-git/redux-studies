import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createTask, removeTask, updateTask } from "../../modules/actions/todoActions";
import { StateType } from "../../modules/types";

export default function TodoApp() {
    const dispatch = useDispatch();
    
    const tasks = useSelector((state: StateType) => state.tasks);
    
    const [name, setName] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [tasksPerPage, setTasksPerPage] = React.useState(5);
    const [startEnd, setStartEnd] = React.useState({
        start: 0,
        end: 5
    });
    const [totalPages, setTotalPages] = useState(Math.ceil(tasks.length / tasksPerPage));
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

    const handleNextPage = () => {
        const copyStartEnd = {...startEnd};

        const newStart = copyStartEnd.end;
        const newEnd = currentPage === totalPages ? tasks.length : copyStartEnd.end + tasksPerPage;    
        setCurrentPage(currentPage + 1);

        setStartEnd({
            start: newStart,
            end: newEnd
        });
    };

    const handlePrevPage = () => {
        const copyStartEnd = {...startEnd};

        const newStart = copyStartEnd.start - tasksPerPage;
        const newEnd = copyStartEnd.end - tasksPerPage;    
        setCurrentPage(currentPage - 1);

        setStartEnd({
            start: newStart,
            end: newEnd
        });
    };

    useEffect(() => {
        setTotalPages(Math.ceil(tasks.length / tasksPerPage));
    }, [tasks, tasksPerPage]);

    return (
        <div>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" value={name}/>
                <button onClick={isEditMode ? () => handleEditTask(taskInfo.index, name) : () => handleCreateTask()}>
                    {isEditMode ? 'edit' : 'create'}
                </button>
            </div>
            <ul>
                {tasks.slice(startEnd.start, startEnd.end).map((task, index) => (
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
            {tasks.length > 4 ? (<div>
                <button onClick={() => handlePrevPage()} disabled={currentPage === 1}>prev</button>
                <button onClick={() => handleNextPage()} disabled={currentPage === totalPages}>next</button>
            </div>) : <></>}
        </div>
    );
}