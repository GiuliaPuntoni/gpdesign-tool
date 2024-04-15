import Text from "./Text";

export default {
  component: Text,
  title: "Text",
  argTypes: {
    className: {
      defaultValue: "",
    },
    id: {
      defaultValue: "",
    },
  },
};

const Template = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export const Basic = Template.bind({});

Basic.args = {
  children: "Default Text",
};
