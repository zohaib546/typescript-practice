"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(100);
kgToLbs("10Kg");
//# sourceMappingURL=index.js.map