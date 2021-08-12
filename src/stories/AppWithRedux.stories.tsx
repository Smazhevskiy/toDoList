import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";


export default {
    title: 'ToDoList/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorators]
} as ComponentMeta<typeof AppWithRedux>

const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux/>


export const AppWithReduxStories = Template.bind({});
AppWithReduxStories.args = {};

