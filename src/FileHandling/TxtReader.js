"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var TXTFileReader = /** @class */ (function () {
    function TXTFileReader() {
        this.data = [];
    }
    TXTFileReader.prototype.Read = function (fileName) {
        this.data = fs_1["default"].readFileSync(fileName, { encoding: 'utf-8' }).split('\n').map(function (row) {
            return row.split(',');
        });
    }; //end of Read()
    return TXTFileReader;
}()); //end of CSVFileReader
exports.TXTFileReader = TXTFileReader;
