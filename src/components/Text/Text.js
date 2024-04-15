import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getTextStyle } from "./TextStyle";
import showdown from "showdown";

const createContainers = (tagsArray, style) => {
  const array = [];
  tagsArray.forEach((element) => {
    const container = styled[element]`
      ${style}
    `;
    const name = `Container_${element}`;
    return array.push({ name, container });
  });
  return array;
};

const generateWrapper = (containers, tag) => {
  const index = containers.findIndex((el) => {
    return el.name === `Container_${tag}`;
  });
  const ContainerWrapper =
    index === -1 ? containers[2].container : containers[index].container;
  return ContainerWrapper;
};

const TT_TAG = [
  "a",
  "p",
  "span",
  "label",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "strong",
  "q",
  "li",
];

const createMarkup = (html) => {
  return { __html: html };
};

const Containers = createContainers(TT_TAG, getTextStyle);

const Text = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    tag,
    fontWeight,
    fontStyle,
    textDecoration,
    fontSize,
    color,
    lineHeight,
    textAlign,
    textTransform,
    noParsed,
    type,
    fontFamily,
    marginBottom,
    ...otherProps
  } = props;
  const Container = generateWrapper(Containers, tag);

  if (typeof children !== "string" || noParsed) {
    return (
      <Container
        className={`text-element ${className}`}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        fontSize={fontSize}
        lineHeight={lineHeight}
        color={color}
        ref={ref}
        textAlign={textAlign}
        tag={tag}
        textTransform={textTransform}
        type={type}
        fontFamily={fontFamily}
        marginBottom={marginBottom}
        {...otherProps}
      >
        {children}
      </Container>
    );
  }
  const noMorePsExt = {
    type: "output",
    filter: function (text, converter) {
      const re = /<\/?p[^>]*>/gi;
      text = text.replace(re, "");
      return text;
    },
  };
  const converter = new showdown.Converter({ extensions: [noMorePsExt] });
  const html = converter.makeHtml(children);

  return (
    <Container
      dangerouslySetInnerHTML={createMarkup(html)}
      className={`text-element ${className}`}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      textDecoration={textDecoration}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      ref={ref}
      textAlign={textAlign}
      tag={tag}
      textTransform={textTransform}
      type={type}
      fontFamily={fontFamily}
      marginBottom={marginBottom}
      {...otherProps}
    />
  );
});

Text.displayName = "Text";

Text.propTypes = {
  /** Sets children of the element. */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  /** Custom className */
  className: PropTypes.string,
  /** HTML Tag to render */
  tag: PropTypes.string,
  /* Color */
  color: PropTypes.string,
  /** Set Font Weight value */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Set Font Style value */
  fontStyle: PropTypes.string,
  /** Set text-decoration value */
  textDecoration: PropTypes.string,
  /** Set Font Size value */
  fontSize: PropTypes.string,
  /** Set line-height value */
  lineHeight: PropTypes.string,
  /** Set text-align value */
  textAlign: PropTypes.string,
  /** Set text-transform value */
  textTransform: PropTypes.string,
  /** Set the type of Text */
  type: PropTypes.string,
  /** True if you want to have a none parsed text */
  noParsed: PropTypes.bool,
  /** Change the theme (font-family) for elements */
  fontFamily: PropTypes.string,
};

Text.defaultProps = {
  className: "",
  tag: "span",
  noParsed: false,
  type: "Text",
  color: "#2f3888",
  fontWeight: "400",
  fontStyle: undefined,
  textDecoration: undefined,
  fontSize: undefined,
  lineHeight: undefined,
  textAlign: undefined,
  textTransform: undefined,
  theme: undefined,
  fontFamily: '"Poppins", sans-serif',
};

export default React.memo(Text);
