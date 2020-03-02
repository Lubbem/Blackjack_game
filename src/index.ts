import { FileHandler } from "./FileHandling/FileHandler";
import { CSVFileReader } from "./FileHandling/CSVReader";


const csvReader = new CSVFileReader();
const fh = new FileHandler('test.csv', csvReader);
var data: string[][] = fh.fileRead();

if (fh.dataReadSuccess) {
    console.log(data);
} else {
    console.log("No data has been retrieved, an error occurred.");   
}


