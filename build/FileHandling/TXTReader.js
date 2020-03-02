"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var TXTFileReader = /** @class */ (function () {
    function TXTFileReader() {
        this.data = [];
        this.datea = "";
    }
    TXTFileReader.prototype.Read = function (fileName) {
        this.datea = fs_1.default.readFileSync(fileName, { encoding: 'utf-8' });
        console.log(this.datea);
        return this.data;
    };
    return TXTFileReader;
}());
exports.TXTFileReader = TXTFileReader;
