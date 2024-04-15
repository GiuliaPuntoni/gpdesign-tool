import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: red;
`;

const Button = React.forwardRef((props, ref) => {
  const { className, children, id, status, ...otherProps } = props;

  return (
    <Container
      className={`${className}`}
      ref={ref}
      id={id}
      status={status}
      {...otherProps}
    >
      {children}
    </Container>
  );
});

Button.displayName = "Button";

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
