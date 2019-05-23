import { expect } from "chai";
import { getInlineStyles, setStyle } from "../src/index";

let testElement: Element;

const testElements = [
  {
    title: "MathML",
    namespace: "http://www.w3.org/1998/Math/MathML",
    tagName: "math"
  },
  {
    title: "SVG",
    namespace: "http://www.w3.org/2000/svg",
    tagName: "svg"
  },
  {
    title: "HTML",
    namespace: "http://www.w3.org/1999/xhtml",
    tagName: "div"
  }
];

for (const { title, namespace, tagName } of testElements) {
  describe(title, () => {
    beforeEach(() => {
      testElement = document.createElementNS(namespace, tagName);
      document.body.appendChild(testElement);
    });

    afterEach(() => document.body.removeChild(testElement));

    describe("set inline style", () => {
      it("should be able to set a valid value", () => {
        setStyle(testElement, "padding-left", "10px");
        expect(getComputedStyle(testElement).paddingLeft).to.equal("10px");
      });

      it("should not loose previous value when given an invalid value", () => {
        testElement.setAttribute("style", "padding-left: 20px");
        setStyle(testElement, "padding-left", "foo");
        expect(getComputedStyle(testElement).paddingLeft).to.equal("20px");
      });

      it("should remove previous value when given an empty string", () => {
        testElement.setAttribute(
          "style",
          "color: rgb(0, 255, 0); color: rgb(255, 0, 0)"
        );
        setStyle(testElement, "color", "");
        expect(getComputedStyle(testElement).color).to.equal("rgb(0, 0, 0)");
      });

      it("should remove previous value when given null", () => {
        testElement.setAttribute(
          "style",
          "color: rgb(0, 255, 0); color: rgb(255, 0, 0)"
        );
        setStyle(testElement, "color", null);
        expect(getComputedStyle(testElement).color).to.equal("rgb(0, 0, 0)");
      });

      it("should remove previous value when given null", () => {
        setStyle(
          testElement,
          "background-image",
          "-webkit-linear-gradient(45deg, red 0%, blue 100%);"
        );
        setStyle(
          testElement,
          "background-image",
          "-moz-linear-gradient(45deg, red 0%, blue 100%);"
        );
        setStyle(
          testElement,
          "background-image",
          "-ms-linear-gradient(45deg, red 0%, blue 100%);"
        );
        setStyle(testElement, "background-image", "foo");
        expect(getComputedStyle(testElement).backgroundImage).to.have.string(
          "linear-gradient"
        );
      });
    });
  });
}
