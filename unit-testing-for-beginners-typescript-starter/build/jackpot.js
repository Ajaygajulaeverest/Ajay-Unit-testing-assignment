"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var RandomNumberGenerator_1 = require("./RandomNumberGenerator");
var jackpot = /** @class */ (function () {
    function jackpot(secretGen, logger) {
        this.secretGen = secretGen;
        this.logger = logger;
    }
    jackpot.prototype.spin = function () {
        var number1 = this.secretGen.random(0, 9);
        var number2 = this.secretGen.random(0, 9);
        var number3 = this.secretGen.random(0, 9);
        this.writeIntoLog(number1, number2, number3);
        if (number1 === number2 && number3 === number2) {
            return true;
        }
        else {
            return false;
        }
    };
    jackpot.prototype.writeIntoLog = function (number1, number2, number3) {
        var log = "Generated ".concat(number1, " ").concat(number2, " ").concat(number3, "\n");
        this.logger.log(log);
    };
    return jackpot;
}());
exports.default = jackpot;
var stubs = new RandomNumberGenerator_1.RandomNumberGenerator();
var loggerMo = new logger_1.Logger();
var enco = new jackpot(stubs, loggerMo);
enco.spin();
console.log('jackpot');
