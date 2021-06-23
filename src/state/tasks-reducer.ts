import {TasksStateType} from '../App';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";
import {v1} from "uuid";

export type RemoveTaskAT = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}
export type AddTaskAT = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
export type ChangeTaskStatusAT = {
    type: "CHANGE-TASK-STATUS"
    taskId: string
    todolistId: string
    isDone: boolean
}
export type ChangeTitleAT = {
    type: "CHANGE-TASK-TITLE"
    taskId: string
    title: string
    todolistId: string
}


type ActionsType = RemoveTaskAT
    | AddTaskAT
    | ChangeTaskStatusAT
    | ChangeTitleAT
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask = {id: "1", title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        case "CHANGE-TASK-STATUS" : {
            let copyState = {...state}
            let tasks = state[action.todolistId];
            let task = tasks.find(t => t.id === action.taskId);
            if (task) {
                task.isDone = action.isDone
            }
            return copyState
        }
        case  "CHANGE-TASK-TITLE" : {
            let copyState = {...state}
            let tasks = state[action.todolistId];
            let task = tasks.find(t => t.id === action.taskId);
            if (task) {
                task.title = action.title
            }
            return copyState
        }
        case "ADD-TODOLIST" : {
            let copyState = {...state}
            state[action.todolistId] = []
            return copyState = {...state}
        }
        case "REMOVE-TODOLIST" : {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => {
    return {type: "REMOVE-TASK", todolistId, taskId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {type: "ADD-TASK", title, todolistId}
}

export const changeTaskStatusAC = (taskId: string,
                                   isDone: boolean,
                                   todolistId: string): ChangeTaskStatusAT => {
    return {type: "CHANGE-TASK-STATUS", taskId, todolistId, isDone}
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTitleAT => {
    return {type: "CHANGE-TASK-TITLE", taskId, title, todolistId}
}