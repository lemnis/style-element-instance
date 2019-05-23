declare type StyleObject = {
    [key: string]: string;
};
export declare function getStyles(element: Element): CSSStyleDeclaration | StyleObject | undefined;
export declare function setStyle(element: Element, propertyName: string, value: string | null): void;
export {};
