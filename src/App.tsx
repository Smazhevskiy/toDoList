import React, {useState} from 'react';
import './App.css';
import {TasksType, ToDoList} from "./ToDoList";

//#5 filter for  useState(setfilter itc)
export type FilterValueType = 'all' | 'active' | 'completed'


function App() {


    ///#3 useState, setTasks itc
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, tittle: 'Css', isDone: true},
        {id: 2, tittle: 'Js', isDone: true},
        {id: 3, tittle: 'React', isDone: false},
        {id: 4, tittle: 'Redux', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')

    //#4 tasksForTodolist
    let tasksForTodolist = tasks
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }



//#2 фунция удаления тасков
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }


    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    return (
        <div className={"App"}>
            <ToDoList
                tasks={tasksForTodolist}
                tittle={'What to learn'}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}


export default App;
