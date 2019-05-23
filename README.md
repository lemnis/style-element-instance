# style-element-instance

[![npm][npm]][npm-url]
[![dev dependencies][dev-deps]][dev-deps-url]
[![browserstack][browserstack]][browserstack-url]

---

Simple plugin that enables easy inline styling for all Element instances,
specificially targeted for MathML elements who lack the `.style` interface.

# Installation

```bash
npm install --save-dev style-element-instance
```

# Example

```js
import getPseudoContent from "style-element-instance";

getPseudoContent(document.body, "::before");
```

[npm]: https://img.shields.io/npm/v/style-element-instance.svg
[npm-url]: https://npmjs.com/package/style-element-instance

[dev-deps]: https://david-dm.org/lemnis/style-element-instance/dev-status.svg
[dev-deps-url]: https://david-dm.org/lemnis/style-element-instance?type=dev

[browserstack]: https://www.browserstack.com/automate/badge.svg?badge_key=VUhSZkR1RFFuQ0RmU20rYURITDRTeHJVUUl6NG9kb1FFU1hSVmovNEw1ST0tLThtZEo4dnREVmEyZE84UmUyeTdRU3c9PQ==--8d87b6888eb752843bf418908b12da5d97593a6f
[browserstack-url]: https://www.browserstack.com/automate/public-build/VUhSZkR1RFFuQ0RmU20rYURITDRTeHJVUUl6NG9kb1FFU1hSVmovNEw1ST0tLThtZEo4dnREVmEyZE84UmUyeTdRU3c9PQ==--8d87b6888eb752843bf418908b12da5d97593a6f
