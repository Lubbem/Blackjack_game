"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHandler_1 = require("./FileHandling/FileHandler");
var CSVReader_1 = require("./FileHandling/CSVReader");
var csvReader = new CSVReader_1.CSVFileReader();
var fh = new FileHandler_1.FileHandler('test.csv', csvReader);
var data = fh.fileRead();
if (fh.dataReadSuccess) {
    console.log(data);
}
else {
    console.log("No data has been retrieved, an error occurred.");
}
