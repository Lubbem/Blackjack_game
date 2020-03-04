import { FileHandler } from "./FileHandling/FileHandler";
import { CSVFileReader } from "./FileHandling/CSVReader";
import { TXTFileReader } from "./FileHandling/TxtReader";
import { Card } from "./Classes/Card";
import { Deck } from "./Classes/Deck";
import { Round } from "./Classes/Round";

const txtReader = new TXTFileReader();
const deck = new Deck();

const fh = new FileHandler(`test.txt`, txtReader);
var data: string[][] = fh.fileRead();





if (fh.dataReadSuccess) {
    //Each row within data is a new round
    for (let i = 0; i < data.length; i++) {
        console.log(`=====================================================================================================================`);
        console.log(` Round ${i+1} Started`);
        console.log(`=====================================================================================================================`);
        var round = new Round(data[i]);
        console.log(`\n`);
    }

} else {
    console.log(`No data has been retrieved, an error occurred.`);
}

console.log(`=====================================================================================================================`);


