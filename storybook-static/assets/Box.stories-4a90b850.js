var r=Object.defineProperty;var t=(o,s)=>r(o,"name",{value:s,configurable:!0});import{j as e}from"./jsx-runtime-cd98d61a.js";import{B as l}from"./Box-5350e976.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const p={parameters:{storySource:{source:`import Box from './Box';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Box',
  component: Box,
} as Meta;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

export const flexBox = Template.bind({});
flexBox.args = {
  className: 'flex',
};

export const flexBetweenBox = Template.bind({});
flexBetweenBox.args = {
  className: 'flex-between',
};
`,locationsMap:{default:{startLoc:{col:45,line:10},endLoc:{col:1,line:17},startBody:{col:45,line:10},endBody:{col:1,line:17}},"flex-box":{startLoc:{col:45,line:10},endLoc:{col:1,line:17},startBody:{col:45,line:10},endBody:{col:1,line:17}},"flex-between-box":{startLoc:{col:45,line:10},endLoc:{col:1,line:17},startBody:{col:45,line:10},endBody:{col:1,line:17}}}}},title:"Box",component:l},n=t(o=>e.jsxs(l,{...o,children:[e.jsx("div",{children:"1"}),e.jsx("div",{children:"2"}),e.jsx("div",{children:"3"}),e.jsx("div",{children:"4"})]}),"Template"),x=n.bind({});x.args={};const a=n.bind({});a.args={className:"flex"};const i=n.bind({});i.args={className:"flex-between"};const b=["Default","flexBox","flexBetweenBox"];export{x as Default,b as __namedExportsOrder,p as default,i as flexBetweenBox,a as flexBox};
//# sourceMappingURL=Box.stories-4a90b850.js.map
