"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const TextStyle_1 = require("./TextStyle");
const showdown_1 = __importDefault(require("showdown"));
const createContainers = (tagsArray, style) => {
    const array = [];
    tagsArray.forEach((element) => {
        const container = styled_components_1.default[element] `
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
    const ContainerWrapper = index === -1 ? containers[2].container : containers[index].container;
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
const Containers = createContainers(TT_TAG, TextStyle_1.getTextStyle);
const Text = react_1.default.forwardRef((props, ref) => {
    const { children, className, tag, fontWeight, fontStyle, textDecoration, fontSize, color, lineHeight, textAlign, textTransform, noParsed, type, fontFamily, marginBottom } = props, otherProps = __rest(props, ["children", "className", "tag", "fontWeight", "fontStyle", "textDecoration", "fontSize", "color", "lineHeight", "textAlign", "textTransform", "noParsed", "type", "fontFamily", "marginBottom"]);
    const Container = generateWrapper(Containers, tag);
    if (typeof children !== "string" || noParsed) {
        return (react_1.default.createElement(Container, Object.assign({ className: `text-element ${className}`, fontWeight: fontWeight, fontStyle: fontStyle, textDecoration: textDecoration, fontSize: fontSize, lineHeight: lineHeight, color: color, ref: ref, textAlign: textAlign, tag: tag, textTransform: textTransform, type: type, fontFamily: fontFamily, marginBottom: marginBottom }, otherProps), children));
    }
    const noMorePsExt = {
        type: "output",
        filter: function (text, converter) {
            const re = /<\/?p[^>]*>/gi;
            text = text.replace(re, "");
            return text;
        },
    };
    const converter = new showdown_1.default.Converter({ extensions: [noMorePsExt] });
    const html = converter.makeHtml(children);
    return (react_1.default.createElement(Container, Object.assign({ dangerouslySetInnerHTML: createMarkup(html), className: `text-element ${className}`, fontWeight: fontWeight, fontStyle: fontStyle, textDecoration: textDecoration, color: color, fontSize: fontSize, lineHeight: lineHeight, ref: ref, textAlign: textAlign, tag: tag, textTransform: textTransform, type: type, fontFamily: fontFamily, marginBottom: marginBottom }, otherProps)));
});
Text.displayName = "Text";
Text.propTypes = {
    /** Sets children of the element. */
    children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]).isRequired,
    /** Custom className */
    className: prop_types_1.default.string,
    /** HTML Tag to render */
    tag: prop_types_1.default.string,
    /* Color */
    color: prop_types_1.default.string,
    /** Set Font Weight value */
    fontWeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    /** Set Font Style value */
    fontStyle: prop_types_1.default.string,
    /** Set text-decoration value */
    textDecoration: prop_types_1.default.string,
    /** Set Font Size value */
    fontSize: prop_types_1.default.string,
    /** Set line-height value */
    lineHeight: prop_types_1.default.string,
    /** Set text-align value */
    textAlign: prop_types_1.default.string,
    /** Set text-transform value */
    textTransform: prop_types_1.default.string,
    /** Set the type of Text */
    type: prop_types_1.default.string,
    /** True if you want to have a none parsed text */
    noParsed: prop_types_1.default.bool,
    /** Change the theme (font-family) for elements */
    fontFamily: prop_types_1.default.string,
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
exports.default = react_1.default.memo(Text);
//# sourceMappingURL=Text.js.map