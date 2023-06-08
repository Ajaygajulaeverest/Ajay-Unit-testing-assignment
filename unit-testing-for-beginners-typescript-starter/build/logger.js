"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var fs_1 = __importDefault(require("fs"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (text) {
        try {
            fs_1.default.appendFileSync('output.txt', // Hardcoded for simplicity. Usually take it from some config
            text);
        }
        catch (_a) {
            console.error('error logging into file');
        }
    };
    return Logger;
}());
exports.Logger = Logger;
