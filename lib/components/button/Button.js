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
const styled_components_1 = __importDefault(require("styled-components"));
const Container = styled_components_1.default.button `
  background-color: red;
`;
const Button = react_1.default.forwardRef((props, ref) => {
    const { className, children, id, status } = props, otherProps = __rest(props, ["className", "children", "id", "status"]);
    return (react_1.default.createElement(Container, Object.assign({ className: `${className}`, ref: ref, id: id, status: status }, otherProps), children));
});
Button.displayName = "Button";
Button.propTypes = {};
Button.defaultProps = {};
exports.default = Button;
//# sourceMappingURL=Button.js.map