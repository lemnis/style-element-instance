"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInlineStyleAsObject(inlineStyle) {
    return inlineStyle.split(";").reduce(function (result, cssText) {
        if (cssText) {
            var _a = cssText.split(":"), property = _a[0], value = _a[1];
            if (property && value)
                result[property.trim()] = value.trim();
        }
        return result;
    }, {});
}
function convertStyleObjectToCssText(styleObject) {
    var result = "";
    for (var key in styleObject) {
        result += key + ": " + styleObject[key] + ";";
    }
    return result;
}
function getStyles(element) {
    if (element.style)
        return element.style;
    if (element.hasAttribute("style"))
        return getInlineStyleAsObject(element.getAttribute("style"));
    return;
}
exports.getStyles = getStyles;
function setStyle(element, propertyName, value) {
    if (element.style)
        return element.style.setProperty(propertyName, value);
    var inlineStyles = {};
    if (element.hasAttribute("style"))
        inlineStyles = getInlineStyleAsObject(element.getAttribute("style"));
    if (value == null)
        delete inlineStyles[propertyName];
    else
        inlineStyles[propertyName] = value;
    element.setAttribute("style", convertStyleObjectToCssText(inlineStyles));
}
exports.setStyle = setStyle;
//# sourceMappingURL=index.js.map