import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';


export default {
    //do not delete
    title: 'API'
}


export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistApi.getTodo()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const title = 'newToDoListCreateExample'
        todolistApi.createTodo(title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'efe3fe5c-5d35-4e80-a3b8-d139ecbddbf6'
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '9fc088e2-1007-4351-b16c-0f8d1a39c6fd'
        const title = 'Hello world'
        todolistApi.updateTodoTitle(todolistId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasksTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'b7e5867d-7046-42d0-9192-f9463502987f'
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTaskTodo = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = '3task'
        const todolistId = 'b7e5867d-7046-42d0-9192-f9463502987f'
        todolistApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTaskTodo = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'b7e5867d-7046-42d0-9192-f9463502987f'
        const tasksId = '201ee636-a9ed-4e27-b4f7-54cee521cd12'
        todolistApi.deleteTask(todolistId, tasksId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'b7e5867d-7046-42d0-9192-f9463502987f'
        const tasksId = 'dafe2a75-f58d-48ad-a1cf-b1bb66179fd9'
        const title = "It's new task TITLE 3TASK"
        todolistApi.updateTaskTitle(todolistId, tasksId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


