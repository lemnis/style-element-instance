"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets a new value for a property on the inline style of the element.
 * @param element
 * @param propertyName Representing the CSS property name (hyphen case) to be modified.
 * @param newValue The new property value. If not specified, treated as the empty string.
 * @param overwrite Set to false when you want to have multiple values for one property, used for defining fallbacks.
 */
function setStyle(element, propertyName, newValue, overwrite) {
    if (overwrite === void 0) { overwrite = true; }
    if (element.style && overwrite && !newValue)
        return element.style.setProperty(propertyName, newValue);
    var inlineCssText = element.getAttribute("style") || "";
    if (!newValue) {
        inlineCssText = inlineCssText.split(";").reduce(function (result, cssText) {
            if (cssText) {
                var _a = cssText.split(":"), property = _a[0], value = _a[1];
                if (property)
                    property = property.trim();
                if (property !== propertyName)
                    result += "; " + property + ":" + value;
            }
            return result;
        }, "");
    }
    else
        inlineCssText += "; " + propertyName + ":" + newValue;
    element.setAttribute("style", inlineCssText);
}
exports.setStyle = setStyle;
//# sourceMappingURL=index.js.map