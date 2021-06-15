import {TodoListType} from "../App";


type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    todoListId: string
}


export const todolistsReduser = (todoLists: Array<TodoListType>, action: RemoveTodolistActionType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.todoListId)
        default:
            return todoLists
    }
}