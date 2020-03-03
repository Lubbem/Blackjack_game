"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHandler_1 = require("./FileHandling/FileHandler");
var TxtReader_1 = require("./FileHandling/TxtReader");
var Deck_1 = require("./Classes/Deck");
var Round_1 = require("./Classes/Round");
var txtReader = new TxtReader_1.TXTFileReader();
var deck = new Deck_1.Deck();
var fh = new FileHandler_1.FileHandler('test.txt', txtReader);
var data = fh.fileRead();
if (fh.dataReadSuccess) {
    //Each row within data is a new round
    for (var i = 0; i < data.length; i++) {
        console.log("=====================================================================================================================");
        console.log(" Round " + (i + 1) + " Started");
        console.log("=====================================================================================================================");
        var round = new Round_1.Round(data[i]);
        console.log('\n');
    }
}
else {
    console.log("No data has been retrieved, an error occurred.");
}
console.log("=====================================================================================================================");
