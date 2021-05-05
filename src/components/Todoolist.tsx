import React from "react";
import {FilterValuesType, TaskType} from "../App";


type PropsTodolistType = {
    tasks: Array<TaskType>
    title: string
    removeTasks: (taskID: number) => void // void - ничего не возвращает
    changeTodoListFilter: (filterValue:FilterValuesType) => void
}

export const Todoolist = (props: PropsTodolistType) => {
    const tasksJSXElements = props.tasks.map(t => {
        const removeTask = () => props.removeTasks(t.id)
        return (
            <li><input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>

            </div>

            <ul>
                {tasksJSXElements}
            </ul>

            <div>
                <button onClick={() => props.changeTodoListFilter("all")}>All</button>
                <button onClick={() => props.changeTodoListFilter("active")}>Active</button>
                <button onClick={() => props.changeTodoListFilter("completed")}>Completed</button>

            </div>
        </div>
    );

}

