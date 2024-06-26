"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextStyle = void 0;
const styled_components_1 = require("styled-components");
const VIEWPORT_SIZE = {
    xs: "576px",
    s: "768px",
    m: "960px",
    l: "1024px",
    xl: "1200px",
    xxl: "1440px",
};
const LinkStyle = (props) => {
    return (0, styled_components_1.css) `
    a {
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: #eee520;
        text-decoration: none;
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #eee520;
      }
    }
    ${props.tag === "a" &&
        (0, styled_components_1.css) `
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: #eee520;
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #eee520;
      }
    `}
  `;
};
const getTextStyle = (props) => {
    let Style;
    return (0, styled_components_1.css) `
    box-sizing: border-box;
    font-family: ${props.fontFamily};
    margin: 0;
    padding: 0;
    letter-spacing: 0.04em;
    font-weight: ${props.fontWeight || 400};
    font-style: ${props.fontStyle};
    text-decoration: ${props.textDecoration || "none"};
    font-size: ${props.fontSize || "16px"};
    line-height: ${props.lineHeight || "1.2"};
    color: ${props.color || "#2f3888"};
    text-align: ${props.textAlign || "left"};
    text-transform: ${props.textTransform};
    margin-bottom: ${props.marginBottom};

    b,
    strong {
      font-weight: 600 !important;
    }

    ${Style}
    ${LinkStyle(props)}
  `;
};
exports.getTextStyle = getTextStyle;
//# sourceMappingURL=TextStyle.js.map