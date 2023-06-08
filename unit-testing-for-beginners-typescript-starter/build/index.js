"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-console
var jackpot_1 = __importDefault(require("./jackpot"));
var logger_1 = require("./logger");
var RandomNumberGenerator_1 = require("./RandomNumberGenerator");
var stubs = new RandomNumberGenerator_1.RandomNumberGenerator();
var loggerMo = new logger_1.Logger();
var enco = new jackpot_1.default(stubs, loggerMo);
enco.spin();
