import { useState } from "react";


export const useTask = () => {
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState(() => {
        const savedTasks = sessionStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [initialTaskList];
    });

    const handlerInputTask = ({target}) => {
        setTaskInput(target.value);
    }

    const handlerAddTask = (task) => {
        task.preventDefault();
        
        if(taskInput == '') {
            alert("Ingresa una tarea válida");
            return;
        }
        
        setTaskList([
            ...taskList,
            {
                id: Math.trunc(Math.random() * 50),
                tarea: taskInput,
                estado: false,
            }
        ])

        setTaskInput('');
    }
    const handlerCheckboxChange = (id) => {
        console.log(id)
        setTaskList(taskList.map(task => task.id == id ? {
            ...task,
            estado: !task.estado
        } : task))

        
    }
    
    const handlerRemoveTask =(id) => {
        console.log("Eliminado");
        setTaskList(taskList.filter(task => task.id != id))
        // setTaskList()
    }

    return {
        handlerAddTask,
        handlerCheckboxChange,
        handlerRemoveTask,
        handlerInputTask,

        taskInput,
        taskList
    }
}
