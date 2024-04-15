import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    className: {
      defaultValue: "",
    },
    id: {
      defaultValue: "",
    },
  },
};

const Template = ({ children, ...rest }) => <Button {...rest}>Button</Button>;

export const Basic = Template.bind({});

Basic.args = {};
