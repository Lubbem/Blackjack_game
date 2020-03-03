"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var FileTypes_1 = require("./FileTypes");
var FileHandler = /** @class */ (function () {
    function FileHandler(filename, dataReader) {
        this.filename = filename;
        this.dataReader = dataReader;
        this.data = [];
        this.dataReadSuccess = false;
    }
    //Check whether the file exists
    FileHandler.prototype.fileExist = function () {
        return fs_1["default"].existsSync(this.filename);
    }; //end of fileExist
    //Check whether the file is correct format
    FileHandler.prototype.fileTypeCheck = function () {
        var extension = this.filename.split('.');
        var correctFileType = false;
        for (var i = 0; i < FileTypes_1.fileTypes.length; i++) {
            if (extension[1] === FileTypes_1.fileTypes[i]) {
                correctFileType = true;
            }
        } //end of for loop i in fileTypes
        return correctFileType;
    }; //end of fileTypeCheck
    FileHandler.prototype.fileRead = function () {
        this.dataReadSuccess = false;
        if (!this.fileExist()) { //Does the file exist
            console.log(this.filename + " does not exist.");
            return [];
        }
        else if (!this.fileTypeCheck()) { //Is the file in the correct format
            console.log(this.filename + " is not in the correct format.");
        }
        this.dataReader.Read(this.filename);
        this.data = this.dataReader.data;
        this.dataReadSuccess = true;
        console.log("Data read successfully from: " + this.filename);
        return this.data;
    }; //end of fileRead
    return FileHandler;
}()); //end of FileHandler
exports.FileHandler = FileHandler;
