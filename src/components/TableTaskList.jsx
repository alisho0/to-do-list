import React, { useEffect, useState } from "react";


export const TableTaskList = ({taskList, handlerCheckboxChange, handlerRemoveTask}) => {


  return (
    <table className="table table-dark table-striped table-hover w-75">
      <thead>
        <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Marcar</th>
            <th>Eliminar</th>
        </tr>
      </thead>
      <tbody className="text-align-center" >
        {
            taskList.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tarea}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.estado ? 'Completada' : 'Pendiente'}</td>
                    <td>
                        <input className="form-check-input" type="checkbox" onChange={()=>handlerCheckboxChange(item.id)} checked={item.estado} />
                    </td>
                    <td >
                      <button className="btn btn-danger" onClick={() => handlerRemoveTask(item.id)}>Eliminar</button>
                    </td>
                </tr>
            ))
        }
      </tbody>
    </table>
  );
};
