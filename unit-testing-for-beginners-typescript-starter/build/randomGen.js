"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    RandomNumberGenerator.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;
