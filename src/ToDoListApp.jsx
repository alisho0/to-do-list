import { useEffect, useState } from "react"
import { TableTaskList } from "./components/TableTaskList"
import { FormTask } from "./components/FormTask";
import { useTask } from "./hooks/useTask";



export const ToDoListApp = () => {

    const {handlerAddTask, handlerCheckboxChange, handlerInputTask, handlerRemoveTask, taskInput, taskList, setTaskInput} = useTask()

    useEffect(() => {
        sessionStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('guarda')
    }, [taskList]);

  return (
    <>
        <div className="container my-3 ">
        <h2>To Do List</h2>

            <FormTask handlerAddTask={handlerAddTask} handlerInputTask={handlerInputTask} taskInput={taskInput} />
            <TableTaskList setTaskInput={setTaskInput} handlerInputTask={handlerInputTask} handlerRemoveTask={handlerRemoveTask} taskList={taskList} handlerCheckboxChange={handlerCheckboxChange}/>
        </div>

    </>
  )
}
