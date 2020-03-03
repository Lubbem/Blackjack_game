"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader() {
        this.data = [];
    }
    CSVFileReader.prototype.Read = function (fileName) {
        this.data = fs_1["default"].readFileSync(fileName, { encoding: 'utf-8' }).split('\n').map(function (row) {
            return row.split(',');
        });
    }; //end of Read()
    return CSVFileReader;
}()); //end of CSVFileReader
exports.CSVFileReader = CSVFileReader;
