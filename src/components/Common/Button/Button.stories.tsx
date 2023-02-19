import Button from './Button';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>버튼</Button>;

export const Default = Template.bind({});
Default.args = {};
