"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var TXTFileReader = /** @class */ (function () {
    function TXTFileReader() {
        this.data = [];
    }
    TXTFileReader.prototype.Read = function (fileName) {
        this.data = fs_1.default.readFileSync(fileName, { encoding: "utf-8" }).split("\n").map(function (row) {
            return row.split(",");
        });
    }; //end of Read()
    return TXTFileReader;
}()); //end of CSVFileReader
exports.TXTFileReader = TXTFileReader;
