"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader() {
        this.data = [];
    }
    CSVFileReader.prototype.Read = function (fileName) {
        this.data = fs_1.default.readFileSync(fileName, { encoding: "utf-8" }).split("\n").map(function (row) {
            return row.split(",");
        });
    }; //end of Read()
    return CSVFileReader;
}()); //end of CSVFileReader
exports.CSVFileReader = CSVFileReader;
