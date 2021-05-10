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
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
}

export function ToDoList(props: PropsType) {
    const [title, setTitle] = useState<string>("")
    const onClickAddTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onChangeSetValue = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
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
                                <li>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={() => props.removeTask(t.id)}>del</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={() => props.changeFilter('all')}>All</button>
                    <button onClick={() => props.changeFilter('active')}>Active</button>
                    <button onClick={() => props.changeFilter('completed')}>Completed</button>
                </div>
            </div>
        </div>
    )
}

