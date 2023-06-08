"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Encoder = /** @class */ (function () {
    function Encoder(secretGen, logger) {
        this.NUMBER_OF_ALPHABETS = 26;
        this.secretGen = secretGen;
        this.logger = logger;
    }
    Encoder.prototype.encode = function (text) {
        var source = text.toLowerCase();
        var result = '';
        var encodeWith = this.secretGen.random(1, this.NUMBER_OF_ALPHABETS);
        for (var idx = 0; idx < text.length; idx++) {
            result += String.fromCharCode(((source.charCodeAt(idx) - 'a'.charCodeAt(0) + encodeWith) %
                this.NUMBER_OF_ALPHABETS) +
                'a'.charCodeAt(0));
        }
        this.writeIntoLog(text, result, encodeWith);
        return result;
    };
    Encoder.prototype.writeIntoLog = function (input, encoded, shiftedBy) {
        var log = "".concat(input, " is encoded into ").concat(encoded, " by shifting ").concat(shiftedBy, " characters \n");
        this.logger.log(log);
    };
    return Encoder;
}());
exports.default = Encoder;
