import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'


function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'Css', isDone: true},
        {id: v1(), title: 'Js', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'graphQL', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')

    let tasksForTodolist = tasks
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }
    function addTask(title: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className={"App"}>
            <ToDoList
                tasks={tasksForTodolist}
                title={'What to learn'}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                filter={filter}
            />
        </div>
    );
}


export default App;
