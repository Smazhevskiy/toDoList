import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";


const changeStatusCallback = action('status is changed')
const changeTitleCallback = action('title is changed')
const removeTaskCallback = action('task is deleted')


export default {
    title: 'ToDoList/Task',
    component: Task,
    args: {
        changeTaskStatus: changeStatusCallback,
        changeTaskTitle: changeTitleCallback,
        removeTask: removeTaskCallback,
    }
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;


// const args = {
//     changeTaskStatus: changeStatusCallback,
//     changeTaskTitle: changeTitleCallback,
//     removeTask: removeTaskCallback,
// }

export const TaskIsDone = Template.bind({});
TaskIsDone.args = {
    task: {id: '1', isDone: true, title: 'Redux'},
    todolistId: 'todolistId_1'
};

export const TaskIsNotDone = Template.bind({});
TaskIsNotDone.args = {
    task: {id: '2', isDone: false, title: 'Js'},
    todolistId: 'todolistId_1'
};
