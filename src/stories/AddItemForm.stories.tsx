import React from 'react';
import {AddItemForm} from "../AddItemForm";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'ToDoList/AddItemForm',
    component: AddItemForm
} as ComponentMeta<typeof AddItemForm>

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
    addItem: action('new title is:')
};
