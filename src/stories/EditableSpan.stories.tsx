import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export default {
    title: 'ToDoList/EditableSpan',
    component: EditableSpan,
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args:EditableSpanPropsType ) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({})
EditableSpanExample.args = {
    onChange: action("Value EditableSpan changed"),
    value: "double click to change"
};