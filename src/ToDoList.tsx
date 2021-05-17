import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValueType
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
}

export function ToDoList(props: PropsType) {
    const {title:TaskTitle, tasks, filter,removeTask, changeFilter, addTask} = props
    const [title, setTitle] = useState<string>("")
    const onClickAddTask = () => {
        addTask(title)
        setTitle("")
    }
    const onChangeSetValue = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }
    const tasksJSXElements = tasks.map(t => {
        let taskClass = t.isDone ? 'is-done' : ""
    })
    return (
        <div className="App">
            <div>
                <h3>{title}</h3>
                <div>
                    <input
                        value={title}
                        onChange={onChangeSetValue}
                        onKeyPress={onKeyPressAddTask}
                    />
                    <button onClick={onClickAddTask}>Add</button>
                </div>
                <ul>
                    {
                        props.tasks.map(t => {
                            return (
                                <li key={t.id} className={'is-done'}>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={() => removeTask(t.id)}>del</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button
                        className={filter === 'all' ? 'active-filter' : ""}
                        onClick={() => changeFilter('all')}>All
                    </button>
                    <button
                        className={filter === 'active' ? 'active-filter' : ""}
                        onClick={() => changeFilter('active')}>Active
                    </button>
                    <button
                        className={filter === 'completed' ? 'active-filter' : ""}
                        onClick={() => changeFilter('completed')}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

