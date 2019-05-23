/**
 * Sets a new value for a property on the inline style of the element.
 * @param element
 * @param propertyName Representing the CSS property name (hyphen case) to be modified.
 * @param newValue The new property value. If not specified, treated as the empty string.
 * @param overwrite Set to false when you want to have multiple values for one property, used for defining fallbacks.
 */
export function setStyle(
  element: Element,
  propertyName: string,
  newValue: string | null,
  overwrite = true
) {
  if ((element as HTMLElement).style && overwrite && !newValue)
    return (element as HTMLElement).style.setProperty(propertyName, newValue);

  let inlineCssText = element.getAttribute("style") || "";

  if (!newValue) {
    inlineCssText = inlineCssText.split(";").reduce((result, cssText) => {
      if (cssText) {
        let [property, value] = cssText.split(":");
        if (property) property = property.trim();
        if (property !== propertyName) result += `; ${property}:${value}`;
      }
      return result;
    }, "");
  } else inlineCssText += `; ${propertyName}:${newValue}`;

  element.setAttribute("style", inlineCssText);
}
