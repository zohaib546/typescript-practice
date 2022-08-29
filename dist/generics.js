"use strict";
var _a, _b;
function fetch(url) {
    url;
    return { data: null, error: null };
}
let userResult = fetch("url");
console.log((_a = userResult.data) === null || _a === void 0 ? void 0 : _a.username);
let productResult = fetch("url");
(_b = productResult.data) === null || _b === void 0 ? void 0 : _b.title;
//# sourceMappingURL=generics.js.map