/**
 * Sets a new value for a property on the inline style of the element.
 * @param element
 * @param propertyName Representing the CSS property name (hyphen case) to be modified.
 * @param newValue The new property value. If not specified, treated as the empty string.
 * @param overwrite
 */
export declare function setStyle(element: Element, propertyName: string, newValue: string | null, overwrite?: boolean): void;
