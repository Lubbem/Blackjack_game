import { FileHandler } from "./FileHandling/FileHandler";
import { TXTFileReader } from "./FileHandling/TxtReader";
import { Deck } from "./Classes/Deck";
import { Round } from "./Classes/Round";

const txtReader = new TXTFileReader();
const fh = new FileHandler(`test.txt`, txtReader);
var data: string[][] = fh.fileRead();

if (fh.dataReadSuccess) {
    //Each row within data is a new round
    for (let i = 0; i < data.length; i++) {
        console.log("=====================================================================================================================");
        console.log(" Round " + (i + 1) + " Started");
        console.log("=====================================================================================================================");
        new Round(data[i]);
        console.log("\n");
    }

} else {
    console.log("No data has been retrieved, an error occurred.");
}

console.log("=====================================================================================================================");


