import React, {useState} from 'react';
import './App.css';
import {Todoolist} from "./components/Todoolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'


function App() {
    // BLL
    const [filter, setFilter] = useState<FilterValuesType>( "all")


    const array = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'C++', isDone: true},
        {id: 5, title: 'Redux', isDone: false}
    ])


    const tasks = array[0]
    const setTasks = array[1]

    function changeTodoListFilter(filterValue: FilterValuesType) {
        setFilter(filterValue)
    }


    function removeTask(taskID: number) {
        const filteredTasks = tasks.filter(t => t.id !== taskID)
        console.log(filteredTasks)
        setTasks(filteredTasks)
    }

//UI
    function getFilteredTasks() {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }


    return (
        <div className="App">
            <Todoolist
                removeTasks={removeTask}
                tasks={getFilteredTasks()}
                title={'What to learn'}
                changeTodoListFilter={changeTodoListFilter}
            />

        </div>
    );
}

export default App;
