import Tarea from "./Tarea"
import React from "react"

const Tareas = ({tareas, onDelete,onToggle}) => {
 

  return (
    
    <>
        {tareas.map((tarea)=>(
            <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tareas