import React from "react";

export const FormTask = ({handlerAddTask, handlerInputTask, taskInput}) => {
  return (
    <form onSubmit={handlerAddTask} className="mb-5">
      <div className="row gap-5">
        <div className="row w-50 my-3 gap-1">
          <label>Agregar Tarea</label>
          <input
            className="form-control "
            onChange={handlerInputTask}
            value={taskInput}
            type="text"
            placeholder="Escribe tu tarea"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar tarea
      </button>
    </form>
  );
};
